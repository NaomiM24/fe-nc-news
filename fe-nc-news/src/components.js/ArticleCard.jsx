import React, { Component } from 'react';
import * as api from '../api'
import { Link  } from '@reach/router'
import ArticleVotesChange from './ArticleVotesChange'


class ArticleCard extends Component {
  state = {
    user: {}
  }

  render() {
    const {article} = this.props
    const date = (article.created_at.split('T'))
    const ukDate = date[0].split('-')
    const time = date[1].split(':')
    const ArticleLink = `/articles/${article.article_id}`
    const AuthorLink = `/authors/${article.author}`
    const TopicLink = `/topics/${article.topic}`
    return (
      <div className="article-card">
        <li>
        <h2>
          <Link to = {ArticleLink}>{article.title}</Link>
        </h2>
        <h3>
        <img src={this.state.user.avatar_url} alt="user avatar" className="avatar" /><br/>
          by: <Link to= {AuthorLink}> {article.author}</Link>
          <br/>
          in: <Link to = {TopicLink}>{article.topic}</Link>
        </h3>
        <p>
          comments: {article.comment_count}
          <br/>
          published on {ukDate[2]}-{ukDate[1]}-{ukDate[0]} at {time[0]}:{time[1]}
        </p>
        <h4 className = "article-votes">
          
          <ArticleVotesChange article_id= {article.article_id} article_vote={article.votes}/>
       </h4>
        </li>
    </div>
    );
  }
  componentDidMount() {
    this.fetchUser()
  }

  fetchUser() {
    const {author} = this.props.article
    api.getUser(author).then(({data : {user}}) =>
    this.setState({user})
    )}
}

export default ArticleCard;