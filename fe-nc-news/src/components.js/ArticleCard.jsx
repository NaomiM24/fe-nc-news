import React, { Component } from 'react';
import * as api from '../api'
import { Link  } from '@reach/router'
import ArticleVotesChange from './ArticleVotesChange'
import styles from '../css modules/Header.module.css'

class ArticleCard extends Component {
  state = {
    user: {}
  }

  render() {
    const {article} = this.props
    const ArticleLink = `/articles/${article.article_id}`
    const AuthorLink = `/authors/${article.author}`
    const TopicLink = `/topics/${article.topic}`
    return (
      <div className="article-card">
      
        <h2>
          <Link to = {ArticleLink}>{article.title}</Link>
        </h2>
        <h3>
        <img src={this.state.user.avatar_url} alt="user avatar" className="avatar" /><br/>
          by: <Link to= {AuthorLink}> {article.author}</Link>
          <br/>
          in: <Link to = {TopicLink}>{article.topic}</Link>
        </h3>
        <h4 className = "article-votes">
          
          <ArticleVotesChange article_id= {article.article_id} article_vote={article.votes}/>
       </h4>
        <h5>
          published at: {article.created_at}
        </h5>
      
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