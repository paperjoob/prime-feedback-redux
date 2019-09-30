import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 150,
      }
})

class InputText extends Component {
    render() {
        const { classes } = this.props;
        return (
            
            <TextField
          id="standard-number"
          label="I am feeling..."
          value={this.props.feeling}
          onChange={event => this.props.feelingChange(event, 'feeling')}
          type="number" min="1" max="5"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ min: "1", max: "5"
            }}
          margin="normal"
        />
        )
    }
}

export default withStyles(styles) (InputText);