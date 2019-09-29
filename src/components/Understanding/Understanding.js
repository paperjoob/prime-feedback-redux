import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

  state = {
    understanding: []
}

// capture understanding rating from 1-5
understandingChange = (event) => {
    this.setState({
        understanding: event.target.value
    })
} // end understandingChange  

// send feelings rating to feedbackReducer
handleNext = (event) => {
    event.preventDefault();
    this.props.dispatch({
        type: 'ADD_UNDERSTANDING',
        payload: this.state.understanding
    })
    this.props.history.push('/support');
} // end handleNext

handleBack = () => {
  this.props.history.push('/');
}

    render() {
        return (

          <div className="UnderstandingDiv">
            <h2>How well are you understanding the content?</h2>
            <div>

                <div>
                    <p>Your Understanding Level:</p>
                    <form>
                    <input onChange={(event) => {this.understandingChange(event, 'understanding')}} type="number" className="inputNumberFeeling" min="1" max="5"></input>
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
    
    export default connect(feedbackReduxState) (Understanding);