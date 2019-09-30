import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class ReviewPage extends Component {

  // post feedback onto server
  handlePost = () => {
    console.log(this.props.reduxState.feedbackReducer)
    Axios.post('/api/feedback', this.props.reduxState.feedbackReducer)
    .then( (response) => {
      console.log(response.data);
    })
    .catch( (error) => {
      console.log('ERROR IN POST', error);
    })
  }

  // when submit button is clicked, run handlepost and move onto the Thank You page
  handleSubmit = () => {
    this.handlePost();
    this.props.dispatch({
      type: 'CLEAR',
      action: {}
    })
    this.props.history.push('/thankyou');
  }

  handleBack = () => {
    this.props.history.push('/comments');
  }

    render() {

        return (
          <div className="ReviewDiv">
            <h2>Review Your Feedback</h2>
            <div>
              <p>Feelings: {this.props.reduxState.feedbackReducer.feeling}</p>
              <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
              <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
              <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
            </div>
            <br />
            <button onClick={this.handleBack} type="button">Back</button>
            <button onClick={this.handleSubmit}>SUBMIT</button>
            <p>{JSON.stringify(this.props.reduxState)}</p>
          </div>
        );
      }
    }
    
    // export the feedbackReduxState via connect
    const feedbackReduxState = (reduxState) => ({
      reduxState
    })

    export default connect(feedbackReduxState) (ReviewPage);