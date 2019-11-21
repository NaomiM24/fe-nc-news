import React, { Component } from 'react';
import * as api from '../api';

class CommentAdder extends Component {
  state = { 
    body: "",
    postedComment: {}
  }
  render() {
    const {postedComment} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input type="text" required placeholder="What do you think?" onChange = {this.handleChange} value={this.state.body}/>
          </label>
          <br/>
          <button >Post</button>
        </form>
        {/* {postedComment.created_at && 
        <><p>comment posted successfully at {postedComment.created_at} by {postedComment.author}</p>
        <br/>
        <p>{postedComment.body}</p></>} */}
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({body: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {article_id, user} = this.props
    const {body} = this.state
    api.addComment(article_id, user, body).then(() => {
      this.setState({body: ''})
      this.props.handleCreatedMessage('Comment Successfully Posted')
    }).catch(error => {
      return(
        this.props.handleCreatedMessage('status: 500, your comment could not be posted at this time, please try again later')
        )
     })
  }
}

// (({data:{comment}}) => {
//   this.setState({body: '', postedComment: comment })
// })

export default CommentAdder;