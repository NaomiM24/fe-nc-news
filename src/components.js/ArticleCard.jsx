import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import VotesChange from "./VotesChange";
import code from "../code.svg";
import football from "../football.svg";
import cooking from "../cooking.svg";

class ArticleCard extends Component {
  state = {
    user: {}
  };

  render() {
    const { article } = this.props;
    const date = article.created_at.split("T");
    const ukDate = date[0].split("-");
    const time = date[1].split(":");
    const ArticleLink = `/articles/${article.article_id}`;
    const AuthorLink = `/authors/${article.author}`;
    const TopicLink = `/topics/${article.topic}`;
    return (
      <div className="article-card">
        <li>
          <h2>
            <Link to={ArticleLink}>{article.title}</Link>
          </h2>
          <div className="article-card-user">
            <Link to={AuthorLink}>
              <img
                src={this.state.user.avatar_url}
                alt="user avatar"
                className="avatar"
              />
            </Link>
          </div>
          <div className="article-card-topic">
            <Link to={TopicLink}>
              {article.topic === "football" ? (
                <img src={football} alt="football" />
              ) : article.topic === "cooking" ? (
                <img src={cooking} alt="cooking" />
              ) : (
                <img src={code} alt="code" />
              )}
            </Link>
          </div>
          <p>
            {article.comment_count} comments
            <br />
            published on {ukDate[2]}-{ukDate[1]}-{ukDate[0]} at {time[0]}:
            {time[1]}
          </p>
          <h4 className="article-card-votes">
            <VotesChange
              id={article.article_id}
              vote={article.votes}
              type={"articles"}
            />
          </h4>
        </li>
      </div>
    );
  }
  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    const { author } = this.props.article;
    api.getUser(author).then(({ data: { user } }) => this.setState({ user }));
  }
}

export default ArticleCard;
