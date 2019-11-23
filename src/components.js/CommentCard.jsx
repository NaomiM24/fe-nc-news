import React, { Component } from "react";
import VotesChange from "./VotesChange";
import * as api from "../api";
import CommentRemover from "./CommentRemover";

class CommentCard extends Component {
  state = {
    user: {}
  };
  render() {
    const { user } = this.state;
    const { comment, selectedUser } = this.props;
    const date = comment.created_at.split("T");
    const ukDate = date[0].split("-");
    const time = date[1].split(":");

    return (
      <li className="comment-card">
        <h3 className="comment-user">
          <img src={user.avatar_url} alt="user avatar" className="avatar" />
          <br />
          posted by: {comment.author}
        </h3>
        <h4 className="comment-votes">
          <VotesChange
            type={"comments"}
            id={comment.comment_id}
            vote={comment.votes}
          />
        </h4>
        <h5 className="comment-published-at">
          published on {ukDate[2]}-{ukDate[1]}-{ukDate[0]} at {time[0]}:
          {time[1]}
        </h5>
        <p className="comment-body">{comment.body}</p>
        {selectedUser === comment.author && (
          <CommentRemover
            comment_id={comment.comment_id}
            removeComments={this.props.removeComments}
            handleDeletedMessage={this.props.handleDeletedMessage}
          />
        )}
      </li>
    );
  }
  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    const { author } = this.props.comment;
    api.getUser(author).then(({ data: { user } }) => this.setState({ user }));
  }
}

export default CommentCard;
