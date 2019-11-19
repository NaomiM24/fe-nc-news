import React, { Component } from 'react';
import * as api from '../api'

class CommentVotesChange extends Component {

  state = {
    vote: 0
  }

  render() {

    return (
      <div>
        <ul>
          <li className="vote">
            <label className="like" onClick={this.handleLike}>
              Like
              <input type='radio' value='like' name='commentvote' />
            </label>
            <li className="vote">
            <label className="dislike" onClick={this.handleDislike}>
              Dislike
              <input type='radio' value='dislike' name='commentvote' />
            </label>
          </li>
          </li>
        </ul>
      </div>
    );
  }

  handleLike = ()=> {
    this.setState({vote: 1})
  }

  handleDislike = () => {
    this.setState({vote: -1})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.vote !== this.state.vote){
      const {comment_id} = this.props
      const {vote} = this.state
      api.updateCommentVotes(comment_id, vote).then(({data: {comment}}) => console.log(comment)
      )
    }
  }
}

export default CommentVotesChange;