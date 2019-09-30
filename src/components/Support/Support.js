import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

  state = {
    support: ''
  }

  // capture support rating from 1-5
  supportChange = (event) => {
      this.setState({
          support: event.target.value
      })
  } // end supportChange  

  // send feelings rating to feedbackReducer
  handleNext = () => {
    if (this.state.support === '') {
      return alert('Please select a number from 1-5');
    } else {
      this.props.dispatch({
          type: 'ADD_SUPPORT',
          payload: this.state.support
      })
      this.props.history.push('/comments')
    }
  } // end handleNext

  handleBack = () => {
    this.props.history.push('/understanding');
  }

    render() {
        return (
          <div className="SupportDiv">
            <div>
              <div>
                <h2>How well are you being supported?</h2>
                  <form>
                    <input onChange={(event) => {this.supportChange(event, 'support')}} type="number" className="inputNumberFeeling" min="1" max="5"></input>
                    <br />
                    <button onClick={this.handleBack} type="button">Back</button>
                    <button onClick={this.handleNext} >Next</button>
                  </form>
              </div>
            </div>
          </div>
        );
      }
    }

    // export the feedbackReduxState via connect
    const feedbackReduxState = (reduxState) => ({
      reduxState
    })
      
    
    export default connect(feedbackReduxState) (Support);