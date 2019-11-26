import React, { Component } from "react";
import * as api from "../api";
import bin from "../bin.svg";

class CommentRemover extends Component {
  state = {
    error: {
      status: null,
      msg: "",
      isLoading: false
    }
  };
  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="loading..."
        />
      );
    }
    const { status, msg } = this.state.error;
    return (
      <>
        <img
          src={bin}
          alt="remove"
          className="comment-remover"
          onClick={this.handleClick}
        />
        {status !== null && (
          <p>
            Error{status}! {msg}
          </p>
        )}
      </>
    );
  }
  handleClick = () => {
    const { comment_id, removeComments } = this.props;
    api
      .deleteComment(comment_id)
      .then(() => {
        this.setState({ isLoading: false });
        this.props.handleDeletedMessage("comment successfully deleted");
      })
      .catch(error => {
        return this.props.handleDeletedMessage(
          "status: 500, your comment could not be deleted at this time, please try again later"
        );
      });
    removeComments(comment_id);
  };
}

export default CommentRemover;
