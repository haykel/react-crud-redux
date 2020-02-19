import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import EditComponent from '../components/EditComponent';

class AllPost extends Component {
render() {
return (
<table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {this.props.posts.map((post) => (
        <tr key={post.id}>
            {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
            key={post.id} />}
        </tr>
        
        ))}
    </tbody>
</table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.rA
    }
}
export default connect(mapStateToProps)(AllPost);