import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllLogs extends Component {
render() {
return (
<table className="table">
    <thead>
      <tr>
        <th>Time</th>
        <th>Action</th>
      </tr>
    </thead>
    
    <tbody>
      {this.props.logs.length > 0 ? (
        this.props.logs.map((log) => (
          <tr key={log.id}>
            <td>{log.logtime}</td>
            <td>{log.logAction}</td>         
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Logs</td>
        </tr>
      )}
    </tbody>
  </table>

        );
    }
}
const mapStateToProps = (state) => {
    console.log(state.rB)
    return {
        logs: state.rB
    }
}

export default connect(mapStateToProps)(AllLogs);