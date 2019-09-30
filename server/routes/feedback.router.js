const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('in GET /api/feedback')
    pool.query('SELECT * from "feedback" ORDER BY "id" desc;').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedback', error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('in POST /api/feedback', newFeedback);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error POST /api/feedback', error)
        res.sendStatus(500);
    });
})

module.exports = router;