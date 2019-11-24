import React, { Component } from "react";
import * as api from "../api.js";
import Toggle from "./Toggle.jsx";
import Comments from "./Comments.jsx";
import { Link } from "@reach/router";
import ErrorPage from "./ErrorPage";
import VotesChange from "./VotesChange";
import CommentAdder from "./CommentAdder.jsx";
import code from "../code.svg";
import football from "../football.svg";
import cooking from "../cooking.svg";

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
    error: null,
    created_message: null
  };
  render() {
    const { isLoading, error, article } = this.state;

    if (isLoading) {
      return (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="loading..."
        />
      );
    }

    if (error !== null) {
      return <ErrorPage msg={error.data.msg} status={error.status} />;
    }

    const AuthorLink = `/authors/${article.author}`;
    const TopicLink = `/topics/${article.topic}`;
    return (
      <div className="single-article">
        <main>
          <h2>{article.title}</h2>
          <Link to={AuthorLink}>
            <h3>by {article.author}</h3>
          </Link>
          <Link to={TopicLink}>
            {article.topic === "football" ? (
              <img src={football} alt="football" />
            ) : article.topic === "cooking" ? (
              <img src={cooking} alt="cooking" />
            ) : (
              <img src={code} alt="code" />
            )}
          </Link>
          <VotesChange
            type={"articles"}
            id={article.article_id}
            vote={article.votes}
          />
          <p className="article-body">{article.body}</p>
        </main>
        <h5>{article.comment_count} comments </h5>
        <section>
          <CommentAdder
            article_id={article.article_id}
            user={this.props.selectedUser}
            handleCreatedMessage={this.handleCreatedMessage}
          />
          {this.state.created_message && (
            <p className="comment-message">{this.state.created_message}</p>
          )}
          <br />
          <Toggle
            buttonName={
              this.props.showContent ? "Hide Comments" : "View Comments"
            }
          >
            <Comments
              article_id={article.article_id}
              selectedUser={this.props.selectedUser}
            />
          </Toggle>
        </section>
      </div>
    );
  }
  fetchData() {
    api
      .getSingleArticle(this.props.article_id)
      .then(({ data: { article } }) => {
        this.setState({ article, isLoading: false });
      })
      .catch(error => {
        const err = error.response;
        this.setState({ error: err, isLoading: false });
      });
  }
  componentDidMount() {
    this.fetchData();
  }

  handleCreatedMessage = event => {
    this.setState({ created_message: event });
  };
}

export default SingleArticle;
