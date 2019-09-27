import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './Feeling.css';
import { connect } from 'react-redux';
import axios from 'axios';

import Understanding from '../Understanding/Understanding';

class Feeling extends Component {

    state = {
        feelings: []
    }

    feelingChange = (event, propertyName) => {
        console.log('hi from feelingChange', event.target.value);
        this.setState({
            feelings: {
                ...this.state.feelings,
                [propertyName]: event.target.value
            }
        })
    }    

    handleNext = (event) => {
        event.preventDefault();
        console.log('hi from handleNext');
        this.props.dispatch({
            type: 'ADD_FEELINGS',
            payload: this.state.feelings
        })
    }

    render() {
        return (
          <div className="FeelingDiv">
            <h2>How are you feeling today?</h2>

            <div>
                <p>Choose a number from 1-5 depending on how you are feeling today.</p>
                <p>5 is feeling great, and 1 is 'I could be better'.</p>
                <form>
                    <input onChange={(event) => {this.feelingChange(event, 'feeling')}} type="number" placeholder='I am feeling...' className="inputNumberFeeling" min="1" max="5"></input>
                    {/* <Router>
                        <Link to="/understanding"><button>Next</button></Link>
                        <Route exact path="/understanding" component={Understanding} />
                    </Router> */}

                    <button onClick={this.handleNext} >Next</button>
                </form>
                <p>{JSON.stringify(this.props.reduxState)}</p>
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