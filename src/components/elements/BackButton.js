import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
const styles = (theme) => ({
    button: {
        margin: theme.spacing(1)
    }
})

class BackButton extends Component {
    render() {
        return (
            <Button onClick={this.props.handleBack} variant="outlined" color="primary">{this.props.copy}
            </Button>
        )
    }
}

export default withStyles(styles) (BackButton);