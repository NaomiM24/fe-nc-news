import React, { Component } from 'react';
import * as api from '../api.js'
import Toggle from './Toggle.jsx';
import Comments from './Comments.jsx';
import { Link  } from '@reach/router'

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
  };
  render() {
    const article = this.state.article

    if (this.state.isLoading){
      return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading..."/>
    } 
    const AuthorLink = `/authors/${article.author}`
    const TopicLink = `/topics/${article.topic}`
    return (
      <div>
      <main>
        <h2>{article.title}</h2>
        <Link to={AuthorLink}><h3>{article.author}</h3></Link>
        <Link to={TopicLink}><h4>{article.topic}</h4></Link>
        <h5>votes: {article.votes} comments: {article.comment_count}</h5>
        <p>{article.body}</p>
      </main>
      <section>
        <Toggle buttonName="View Comments">
          <Comments article_id={this.state.article.article_id}/>
        </Toggle>
      </section>
      </div>
    );
  }
  fetchData() {
    api.getSingleArticle(this.props.article_id).then(({data: {article}}) => {
      this.setState({article, isLoading: false})
    })
  }
  componentDidMount(){
    this.fetchData();
  }
}

export default SingleArticle;