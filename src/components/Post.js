import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDate } from '../utils/utils';

class Post extends Component {

    
render() {
    const datalog = {
        id: getDate(),
        logAction:'DELETE Data',
        logtime: getDate()
      }
    const deleteData = () => {
        this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id,logtime:getDate(), logAction :'DELETE_LOG' })
        this.props.dispatch({ type: 'DELETE_LOG', datalog })
    }
    
    return (
    <>
        <td>{this.props.post.name}</td>
        <td>{this.props.post.username}</td>
        <td>
            <button className="btn btn-primary"
            onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
            }
            >Edit</button>
            <button className="btn btn-primary" style={{marginLeft:'5px'}}
            onClick={deleteData}
            >Delete</button>
        </td>
    </>
        );
    }
}
export default connect()(Post);