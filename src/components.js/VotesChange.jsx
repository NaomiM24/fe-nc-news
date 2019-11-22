import React, { Component } from "react";
import * as api from "../api";

class VotesChange extends Component {
  state = {
    vote: 0,
    error: {
      status: null,
      msg: ""
    }
  };

  render() {
    const { status, msg } = this.state.error;
    const { vote } = this.props;

    return (
      <div>
        votes: {vote + +this.state.vote}
        <br />
        <button
          className="like"
          value={1}
          onClick={this.handleClick}
          disabled={this.state.vote === 1 ? true : false}
        >
          ⇧
        </button>
        <button
          className="dislike"
          value={-1}
          onClick={this.handleClick}
          disabled={this.state.vote === -1 ? true : false}
        >
          ⇩
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
    this.state.vote === 0
      ? this.setState({ vote: event.target.value })
      : this.setState({ vote: 0 });
  };

  componentDidUpdate(prevProps, prevState) {
    const { id, type } = this.props;

    if (+this.state.vote === 0 && +prevState.vote !== 0) {
      const vote = -+prevState.vote;
      api.updateVotes(type, id, vote).catch(error => {
        return this.setState({
          vote: 0,
          error: {
            status: 500,
            msg: "cancel vote did not work at this time, please try again later"
          }
        });
      });
    } else if (prevState.vote !== this.state.vote) {
      const { vote } = this.state;
      api.updateVotes(type, id, vote).catch(error => {
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

export default VotesChange;
