import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Support from '../Support/Support';

class Understanding extends Component {
    render() {
        return (

          <div className="UnderstandingDiv">
            <h2>HELLO FROM Understanding</h2>
            <div>
                <Router>
                    <Link to="/support"><button>Next</button></Link>
                    <Route exact path="/support" component={Support} />
                </Router>
            </div>
          </div>
        );
      }
    }
    
    export default Understanding;