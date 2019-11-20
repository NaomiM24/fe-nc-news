import React, { Component } from 'react';
import * as api from '../api'

class SelectUser extends Component {
  state = {
    users: [],

  }
  render() {
    
    return (
      <div>
        <label>
          Select User:
          <select onChange={this.props.handleUserChange}>
          {this.state.users.map(user => {
            return (
              <option key={user.username} value={user.username}>{user.username}</option>
            )
          })}
        </select>
        </label>
      </div>
    );
  }
  componentDidMount() {
    api.getAllUsers().then(({data: {users}}) => {
      this.setState({users})
    })
  }

}

export default SelectUser;