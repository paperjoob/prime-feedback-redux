import React, { Component } from 'react';
import { connect} from 'react-redux';

class Comments extends Component {

  state = {
    comments: []
  }

  // capture comments on change
  commentsChange = (event, propertyName) => {
      this.setState({
          comments: event.target.value
      })
  } // end commentsChange  

  // send feelings rating to feedbackReducer
  handleNext = (event) => {
      event.preventDefault();
      this.props.dispatch({
          type: 'ADD_COMMENTS',
          payload: this.state.comments
      })
      this.props.history.push('/review');
  } // end handleNext

  handleBack = () => {
    this.props.history.push('/support');
  }

    render() {
        return (
          <div className="CommentsDiv">
            <div>
                <h2>Got Comments? We'd love to hear!</h2>
                  <form>
                    <input onChange={(event) => {this.commentsChange(event, 'comments')}} type="text" className="inputNumberFeeling"></input>
                    <br />
                    <button onClick={this.handleBack} type="button">Back</button>
                    <button onClick={this.handleNext} >Next</button>
                  </form>
              </div>
          </div>
        );
      }
    }
    
    // export the feedbackReduxState via connect
    const feedbackReduxState = (reduxState) => ({
      reduxState
    })

    export default connect(feedbackReduxState) (Comments);