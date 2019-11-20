import React, { Component } from 'react';
import CommentVotesChange from './CommentVotesChange';
import * as api from '../api'
import CommentRemover from './CommentRemover';

//({comment, article_id}) 
class CommentCard extends Component {
  state = {
    user: {}
  }
  render() {
    const {user} = this.state
    const {comment, selectedUser} = this.props
    return (
      <main >
         <li className="comment-card">
        <h3 className="comment-user">
         <img src={user.avatar_url} alt="user avatar" className="avatar" /*onerror="this.src='../user-placeholder.jpg'"*//><br/>
          posted by: {comment.author}
        </h3>
        <h4 className = "comment-votes">
          
           <CommentVotesChange comment_id= {comment.comment_id} comment_vote={comment.votes}/>
        </h4>
        <p className = "comment-body">{comment.body}</p>
        <h5 className = "comment-published-at">
          published at: {comment.created_at}
        </h5>
        {selectedUser === comment.author && <CommentRemover comment_id={comment.comment_id} article_id={this.props.article_id}/>}
       </li>
      </main>
    );
  }
  componentDidMount() {
    this.fetchUser()
  }

  fetchUser() {
    const {author} = this.props.comment
    api.getUser(author).then(({data : {user}}) =>
    this.setState({user})
    )}
}

export default CommentCard;