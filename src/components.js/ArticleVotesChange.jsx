import React, { Component } from "react";
import * as api from "../api";


class ArticleVotesChange extends Component {
  state = {
    vote: 0,
    error: {
      status: null,
      msg: ""
    }
  };
  render() {
    const { status, msg } = this.state.error;

    return (
      <div>
        votes: {this.props.article_vote + +this.state.vote}
        <br />
        <button
          className="like"
          value={1}
          onClick={this.handleClick}
          disabled={this.state.vote === 1 ? true : false}
        >
          Like
          
        </button>
        <button
          className="dislike"
          value={-1}
          onClick={this.handleClick}
          disabled={this.state.vote === -1 ? true : false}
        >
          Dislike
        </button>
        
        <button
          className="cancel"
          value={0}
          onClick={this.handleClick}
          disabled={this.state.vote === 0 ? true : false}
        >
          Cancel Vote
        </button>
        {status !== null && (
          <p>
            Error {status}! {msg}
          </p>
        )}
      </div>
    );
  }

  handleClick = event => {
    this.setState({ vote: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    const { article_id } = this.props;
    if (+this.state.vote === 0 && +prevState.vote !== 0){
      const vote = -(+prevState.vote)
      api.updateArticleVotes(article_id, vote).catch(error => {
        return this.setState({
          vote: 0,
          error: {
            status: 500,
            msg: "cancel vote did not work at this time, please try again later"
          }
        });
      });
    }
  
    else if (prevState.vote !== this.state.vote) {
      const { vote } = this.state;
      api.updateArticleVotes(article_id, vote).catch(error => {
        return this.setState({
          vote: 0,
          error: {
            status: 500,
            msg: "voting did not work, please try again later"
          }
        });
      });
    }
  }
}

export default ArticleVotesChange;
