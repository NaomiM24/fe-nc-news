import React, { Component } from "react";
import * as api from "../api";

class CommentAdder extends Component {
  state = {
    body: "",
    isLoading: false
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
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="comment-adder">
          <textarea
            type="text"
            required
            placeholder="What do you think?"
            className="comment-input-box"
            onChange={this.handleChange}
            value={this.state.body}
            />
            <button className="post-button">Post</button>

          <br />
        </form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ body: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { article_id, user } = this.props;
    const { body } = this.state;
    this.setState({ isLoading: true });
    api
      .addComment(article_id, user, body)
      .then(({ data: { comment } }) => {
        this.setState({ body: "", isLoading: false });
        this.props.handleCreatedMessage("comment successfully posted");
        this.props.handlePostedComment(comment);
      })
      .catch(error => {
        return this.props.handleCreatedMessage(
          "status: 500, your comment could not be posted at this time, please try again later"
        );
      });
  };
}

//

export default CommentAdder;
