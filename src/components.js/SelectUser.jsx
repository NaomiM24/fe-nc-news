import React, { Component } from 'react';
import * as api from '../api'
import styles from '../css modules/SelectUser.module.css'

class SelectUser extends Component {
  state = {
    users: [],

  }
  render() {
    
    return (
      <div className={styles.selectuser}>
        <label>
          <p className={styles.text}>Select User:</p>
          <select className="dropDown" onChange={this.props.handleUserChange}>
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