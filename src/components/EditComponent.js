import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDate } from '../utils/utils';

class EditComponent extends Component {

handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newUsername = this.getUsername.value;

  const datalog = {
    id: getDate(),
    logAction:'UPDATE Data',
    logtime: getDate()
  }

  const data = {
    newName,
    newUsername,
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  this.props.dispatch({ type: 'UPDATE_LOG', datalog })
}
render() {
  return (
  <div key={this.props.post.id} className="post">
    <form className="form" onSubmit={this.handleEdit}>
      <div className="form-group">
        <label>Name</label>
        <input className="form-control" required type="text" name="name" ref={(input) => this.getName = input}
        defaultValue={this.props.post.name} placeholder="Enter Name" />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input className="form-control" required type="text" name="username" ref={(input) => this.getUsername = input}
        defaultValue={this.props.post.username} placeholder="Enter Username" />
      </div>
      <button className="btn btn-primary">Update</button>
    
    </form>
  </div>
    );
  }
}
export default connect()(EditComponent);