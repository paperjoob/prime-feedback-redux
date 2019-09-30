import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import './Admin.css';
import AdminList from '../AdminList/AdminList';

class Admin extends Component {

    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        Axios.get('/api/feedback')
        .then( (response) => {
            this.props.dispatch({
              type: 'GRAB_FEEDBACK',
              payload: response.data
            })
          }).catch( (error) => {
            console.log('error in GET', error);
          })
    }

  render() {
      
    return (
      <div className="AdminDiv">
        <header className="Admin-header">
            <h1>Admin</h1>
        </header>
        <div>
            <AdminList />
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