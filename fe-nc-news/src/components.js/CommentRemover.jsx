import React, {Component} from 'react';
import * as api from '../api';
import {navigate} from '@reach/router'

class CommentRemover extends Component{
  state = {
    error: {
      status: null,
      msg: '',
    }
  }
  render() {
    const {status, msg} = this.state.error
    return (
      <>
       <button className="comment-remover" onClick={this.handleClick}>Remove Comment</button>
       {(status !== null) && <p>Error{status}! {msg}</p>}
      </>
      );
    }
    handleClick = () =>{
      const {comment_id, removeComments} = this.props
      api.deleteComment(comment_id).then(() => {
        this.props.handleDeletedMessage('Message Successfully Seleted')
      })
      .catch(error => {
      return(
        this.props.handleDeletedMessage('status: 500, your comment could not be deleted at this time, please try again later')
        // this.setState({vote: 0, error:{status: 500, msg: 'your comment could not be deleted at this time, please try again later'}})
        )
     })
      removeComments(comment_id)
  }
  
};

export default CommentRemover;