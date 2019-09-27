import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Comments from '../Comments/Comments';

class Support extends Component {
    render() {
        return (
          <div className="SupportDiv">
            <h2>HELLO FROM Support Me</h2>
            <div>
                <Router>
                    <Link to="/comments"><button>Next</button></Link>
                    <Route exact path="/comments" component={Comments} />
                </Router>
            </div>
          </div>
        );
      }
    }
    
    export default Support;