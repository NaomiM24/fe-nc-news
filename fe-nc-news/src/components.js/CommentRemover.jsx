import React, {Component} from 'react';
import * as api from '../api';


class CommentRemover extends Component{
  state = {
    error: {
      status: null,
      msg: '',
      isLoading: false,
    }
  }
  render() {
    const {isLoading} = this.state
    if (isLoading){
      return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading..."/>
    } 
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
      this.setState({isLoading: true})
      api.deleteComment(comment_id).then(() => {
        this.setState({isLoading: false})
        this.props.handleDeletedMessage('Message Successfully Deleted')
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