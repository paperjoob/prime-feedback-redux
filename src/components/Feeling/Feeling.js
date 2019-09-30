import React, { Component } from 'react';
import './Feeling.css';
import { connect } from 'react-redux';
import InputText from '../elements/InputText';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#64b5f6',
          contrastText: '#fff',
      },
      error: red,
      contrastThreshold: 3,
      tonalOffset: .2,
      text: {
          primary: '#64b5f6'
      }
    },
  })

class Feeling extends Component {

    state = {
        feeling: []
    }

    // capture feelings rating from 1-5
    feelingChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
        console.log(event.target.value);
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

        <MuiThemeProvider theme={theme}>
            <div className="FeelingDiv">
                <h2>How are you feeling today?</h2>
                <div>
                    <p>Choose a number from 1-5 depending on how you are feeling today.</p>
                    <p>5 is feeling great, and 1 is 'I could be better'.</p>
                    <form>
                        {/* <input onChange={(event) => {this.feelingChange(event, 'feeling')}} type="number" placeholder='I am feeling...' className="inputNumberFeeling" min="1" max="5"></input> */}
                        <InputText feelingChange = {this.feelingChange}/>
                        <button onClick={this.handleNext} >Next</button>
                    </form>
                </div>
            </div>
        </MuiThemeProvider>
        );
      }
    }

    // export the feedbackReduxState via connect
    const feedbackReduxState = (reduxState) => ({
        reduxState
    })
    
    export default connect(feedbackReduxState) (Feeling);