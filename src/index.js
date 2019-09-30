import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedback = 
    {
        feeling: '',
        understanding: '',
        support: '',
        comments: ''
    }

const feedbackReducer = (state = feedback, action) => {
    switch (action.type) {
        case 'ADD_FEELINGS': 
            state.feeling = action.payload
            return state;
        case 'ADD_UNDERSTANDING':
            state.understanding = action.payload
            return state;
        case 'ADD_SUPPORT':
            state.support = action.payload;
            return state;
        case 'ADD_COMMENTS':
            state.comments = action.payload;
            return state;
        case 'CLEAR':
            state = [];
            return state;
        default:
            return state;
    }
}

const feedbackList = (state = [], action) => {
    // TODO - set feedback list with data from server
    if (action.type === 'GRAB_FEEDBACK') {
      return action.payload; // use spread operator if you would like to keep the state and add on top of it
    } // with no spread operator, just update the page as is
    return state;
  }

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        feedbackList
    }), 
    applyMiddleware(logger)   
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
