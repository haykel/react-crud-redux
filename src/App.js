import React, { Component } from 'react';
import PostForm from './components/PostForm/PostForm';
import AllPost from './components/AllPost';
import AllLogs from './components/AllLogs';


class App extends Component {
render() {
  return (
    <div className="container">
      <h1>CRUD App with React/Redux And Log Event</h1>
        <div className="flex-row">
          <div className="flex-large">
            <PostForm />
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <AllPost />
          </div>
          <div className="flex-large">
            <h2>View Logs</h2>
            <AllLogs />
          </div>
        </div>
    </div>
  );
  }
}
export default App;