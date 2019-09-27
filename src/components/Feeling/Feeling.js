import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Understanding from '../Understanding/Understanding';

class Feeling extends Component {
    render() {
        return (
          <div className="FeelingDiv">
            <h2>HELLO FROM FEELINGS</h2>
            <div>
                <Router>
                    <Link to="/understanding"><button>Next</button></Link>
                    <Route exact path="/understanding" component={Understanding} />
                </Router>
            </div>
          </div>
        );
      }
    }
    
    export default Feeling;