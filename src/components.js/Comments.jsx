import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    order: null,
    sort_by: null,
    deleted_message: null,
  };
  render() {
    if (this.state.isLoading) {
      return (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="loading..."
        />
      );
    }
    return (
      <article className="article-comments">
        <form>
          <label>
            Sort By:
            <select onChange={this.handleSelectChange} className="dropDown">
              <option value="created_at">Date</option>
              <option value="votes">Votes</option>
            </select>
          </label>
          <br />
          <label>
            Order By: Ascending
            <input
              type="radio"
              name="order"
              value="asc"
              onClick={this.handleClick}
            />
            Descending
            <input
              type="radio"
              name="order"
              value="desc"
              onClick={this.handleClick}
            />
          </label>
        </form>
        <section>
          {this.state.deleted_message && (
            <p className="comment-message">{this.state.deleted_message}</p>
          )}
          <ul id="comment-list">
            {this.state.comments.map(comment => {
              return (
                <>
                  <CommentCard
                    comment={comment}
                    key={comment.comment_id}
                    selectedUser={this.props.selectedUser}
                    article_id={this.props.article_id}
                    removeComments={this.removeComments}
                    handleDeletedMessage={this.handleDeletedMessage}
                  />
                </>
              );
            })}
          </ul>
        </section>
      </article>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order
    )
      this.fetchComments();
    if (prevProps.posted_comment !== this.props.posted_comment){
      this.setState((currentState) => {
        return {
          comments: [this.props.posted_comment, ...currentState.comments]}
      })
    }
  }

  fetchComments() {
    const { article_id } = this.props;
    const { sort_by, order } = this.state;
    api
      .getComments(article_id, sort_by, order)
      .then(({ data: { comments } }) =>
        this.setState({ comments, isLoading: false })
      );
  }

  handleSelectChange = event => {
    const sort_by = event.target.value;
    this.setState({ sort_by });
  };

  handleClick = event => {
    const order = event.target.value;
    this.setState({ order });
  };

  removeComments = comment_id => {
    this.setState(currentState => {
      return {
        comments: currentState.comments.filter(comment => {
          return comment.comment_id !== comment_id;
        })
      };
    });
  };

  handleDeletedMessage = event => {
    this.setState({ deleted_message: event });
  };

}


export default Comments;
