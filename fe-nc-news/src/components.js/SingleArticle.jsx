import React, { Component } from 'react';
import * as api from '../api.js'

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
  };
  render() {
    const article = this.state.article
    console.log(article)

    if (this.state.isLoading){
      return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading..."/>
    } 
    return (
      <main>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <h4>{article.topic}</h4>
        <h5>votes: {article.votes} comments: {article.comment_count}</h5>
        <p>{article.body}</p>
      </main>
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