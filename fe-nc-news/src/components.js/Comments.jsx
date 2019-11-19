import React, { Component } from 'react';
import * as api from '../api'
import CommentCard from './CommentCard'

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
  }
  render() {

    if (this.state.isLoading){
      return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading..."/>
    } 
    return (
      <main>
        <ul id = "comment-list">
          {this.state.comments.map(comment => {
            return (
              <CommentCard comment={comment}/>
            )
          })}
        </ul>
      </main>
    );
  }
  componentDidMount() {
    this.fetchComments()
  }

  fetchComments() {
    const {article_id} = this.props
    api.getComments(article_id).then(({data: {comments}}) => this.setState({comments, isLoading: false})
    )}
}

export default Comments;