import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thankyou extends Component {

    newFeedback = () => {
        this.props.history.push('/');
    }

    render() {
        return (
          <div className="ThankyouDiv">
            <p>Thank you! Your feedback has been submitted.</p>

            <div className="newFeedbackDiv">
              <button onClick={this.newFeedback}>Leave New Feedback</button>
            </div>
          </div>
        );
      }
    }

    // export the feedbackReduxState via connect
    const feedbackReduxState = (reduxState) => ({
      reduxState
    })
    
    export default connect(feedbackReduxState) (Thankyou);