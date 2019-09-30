import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButton from '../elements/RadioButton';
import NextButton from '../elements/NextButton';
import BackButton from '../elements/BackButton';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';


const theme = createMuiTheme({
  palette: {
    primary: purple,
    error: red,
    contrastThreshold: 3,
    tonalOffset: .2,
  },
})

class Understanding extends Component {

  state = {
    understanding: ''
}

// capture understanding rating from 1-5
understandingChange = (event) => {
    this.setState({
        understanding: event.target.value
    })
} // end understandingChange  

// send feelings rating to feedbackReducer
handleNext = () => {
  if (this.state.understanding === '') {
      return alert('Please select a number from 1-5');
  } else {
    this.props.dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: this.state.understanding
  })
  this.props.history.push('/support');
  } 
} // end handleNext

handleBack = () => {
  this.props.history.push('/');
}

    render() {
        return (
          <MuiThemeProvider theme={theme}>
          <div className="UnderstandingDiv">
            <h2>How well are you understanding the content?</h2>
            <div>
                <RadioButton copy='1' understandingChange={this.understandingChange}/>
                <br />
                <BackButton copy='Back' handleBack={this.handleBack}/>
                <NextButton copy='Next' handleNext={this.handleNext}/>
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
    
    export default connect(feedbackReduxState) (Understanding);