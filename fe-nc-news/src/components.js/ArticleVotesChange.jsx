import React, { Component } from 'react';
import * as api from '../api'

class ArticleVotesChange extends Component {
  state = {
    vote: 0
  }
  render() {

    return (
      <div>
        votes: {this.props.article_vote + this.state.vote}
        <ul>
          <li className="vote">
            <label className="like" onClick={this.handleLike}>
              Like
              <input type='radio' value='like' name='articlevote' />
            </label>
            <li className="vote">
            <label className="dislike" onClick={this.handleDislike}>
              Dislike
              <input type='radio' value='dislike' name='articlevote' />
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
      const {article_id} = this.props
      const {vote} = this.state
      api.updateArticleVotes(article_id, vote)        
    }
  }
}

export default ArticleVotesChange;