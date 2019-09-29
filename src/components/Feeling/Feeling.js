import React, { Component } from 'react';
import './Feeling.css';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: []
    }

    // capture feelings rating from 1-5
    feelingChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
    } // end feelingChange  

    // send feelings rating to feedbackReducer
    handleNext = (event) => {
        event.preventDefault();
        console.log('hi from handleNext');
        this.props.dispatch({
            type: 'ADD_FEELINGS',
            payload: this.state.feeling
        })
        this.props.history.push('/understanding');
    } // end handleNext

    render() {
        return (
          <div className="FeelingDiv">
            <h2>How are you feeling today?</h2>
            <div>
                <p>Choose a number from 1-5 depending on how you are feeling today.</p>
                <p>5 is feeling great, and 1 is 'I could be better'.</p>
                <form>
                    <input onChange={(event) => {this.feelingChange(event, 'feeling')}} type="number" placeholder='I am feeling...' className="inputNumberFeeling" min="1" max="5"></input>
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
    
    export default connect(feedbackReduxState) (Feeling);