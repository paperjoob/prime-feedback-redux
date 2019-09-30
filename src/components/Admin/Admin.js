import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import './Admin.css';

class Admin extends Component {

    state = {
        feedback: []
    }

    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        Axios.get('/api/feedback')
        .then( (response) => {
            this.setState({
                feedback: response.data
            });
            console.log(this.state.feedback)
          }).catch( (error) => {
            console.log('error in GET', error);
          })
    }


  render() {

    const displayFeed = this.state.feedback.map((feed, i) => {
        return <tr key={i}><td>{feed.feeling}</td>
        <td> {feed.understanding}</td>
        <td>{feed.support}</td>
        <td>{feed.comments}</td>
        <td><button>Delete</button></td>
        </tr>
    })
      
    return (
      <div className="AdminDiv">
        <header className="Admin-header">
            <h1>Admin</h1>
        </header>
        <div>
            <table className="AdminTable">
                <tbody>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                        {displayFeed}
                </tbody>
                
            </table>
        </div>
      </div>
    );
}
}

 // export the feedbackReduxState via connect
 const feedbackReduxState = (reduxState) => ({
    reduxState
  })

export default connect(feedbackReduxState) (Admin);