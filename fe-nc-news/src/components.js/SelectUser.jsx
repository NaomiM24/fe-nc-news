import React, { Component } from 'react';
import * as api from '../api'

class SelectUser extends Component {
  state = {
    users: [],
    selectedUser: 'tickle122'
  }
  render() {

    return (
      <div>
        <label>
          Select User:
          <select onChange={this.handleChange}>
          {this.state.users.map(user => {
            return (
              <option key={user.username} value={user.username}>{user.username}</option>
            )
          })}
        </select>
        </label>
        <h2>Welcome {this.state.selectedUser}</h2>
      </div>
    );
  }
  componentDidMount() {
    api.getAllUsers().then(({data: {users}}) => {
      this.setState({users})
    })
  }

  handleChange = (event) =>{

    this.setState({selectedUser: event.target.value})
  }
}

export default SelectUser;