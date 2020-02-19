import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDate } from '../../utils/utils';

class PostForm extends Component {
handleSubmit = (e) => {
    
    e.preventDefault();
    const name = this.getName.value;
    const username = this.getUsername.value;

    const datalog = {
        id: getDate(),
        logAction:'ADD Data',
        logtime: getDate()
    }
    const data = {
        id: getDate(),
        name, 
        username,
        editing: false,
    }
    this.props.dispatch({
        type: 'ADD_POST',
        data,
        datalog
    })
    this.props.dispatch({
        type: 'ADD_LOG',
        datalog
    })
    
    this.getName.value = '';
    this.getUsername.value = '';
}
render() {
    return (
    <div className="post-container">
        <form className="form" onSubmit={this.handleSubmit} >
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" required type="text" name="name" ref={(input) => this.getName = input}
                placeholder="Enter Name" />
            </div> 
            <div className="form-group">
                <label>Username</label>
                <input className="form-control" required type="text" name="username" ref={(input) => this.getUsername = input}
                    placeholder="Enter Username" />
            </div>
            <button className="btn btn-primary">Add new user</button>
        </form>
    </div>
        );
    }
}
export default connect()(PostForm);