import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminList extends Component {

  render() {

    const displayFeed = this.props.reduxState.feedbackList.map((feed, i) => {
        return <tr key={i}><td>{feed.feeling}</td>
        <td> {feed.understanding}</td>
        <td>{feed.support}</td>
        <td>{feed.comments}</td>
        <td><button>Delete</button></td>
        </tr>
    })
      
    return (
      <div className="AdminListDiv">
            <table className="AdminTable">
                <tbody>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                        {displayFeed}
                </tbody>   
            </table>
      </div>
    );
}
}

 // export the feedbackReduxState via connect
 const feedbackReduxState = (reduxState) => ({
    reduxState
  })

export default connect(feedbackReduxState) (AdminList);