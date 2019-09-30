import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(1)* 3,
    },
    group: {
      margin: `${theme.spacing(1)}px 0`,
    },
  });

class RadioButton extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
            <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Understanding?</FormLabel>
            <RadioGroup
                aria-label="Understanding?"
                name="understandinglevel"
                className={classes.group}
                value={this.props.value}
                onChange={this.props.understandingChange}
            >
                <FormControlLabel value="1" control={<Radio color="primary"/>} label="1" />
                <FormControlLabel value="2" control={<Radio color="primary"/>} label="2" />
                <FormControlLabel value="3" control={<Radio color="primary"/>} label="3" />
                <FormControlLabel value="4" control={<Radio color="primary"/>} label="4" />
                <FormControlLabel value="5" control={<Radio color="primary"/>} label="5" />
                </RadioGroup>
            </FormControl>
            </div>
            )   
        }
    }

RadioButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (RadioButton);