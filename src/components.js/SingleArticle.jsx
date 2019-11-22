import React, { Component } from 'react';
import * as api from '../api.js'
import Toggle from './Toggle.jsx';
import Comments from './Comments.jsx';
import { Link  } from '@reach/router';
import ErrorPage from './ErrorPage';
import ArticleVotesChange from './ArticleVotesChange'
import CommentAdder from './CommentAdder.jsx';

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
    error: null,
    created_message: null,
  };
  render() {
    const {isLoading, error, article} = this.state

    if (isLoading){
      return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading..."/>
    } 

    if (error !== null){
      return <ErrorPage msg={error.data.msg} status ={error.status}/>
    }


    const AuthorLink = `/authors/${article.author}`
    const TopicLink = `/topics/${article.topic}`
    return (
      <div>
      <main>
        <h2>{article.title}</h2>
        <Link to={AuthorLink}><h3>by {article.author}</h3></Link>
        <Link to={TopicLink}><h4>in {article.topic}</h4></Link>
        <h5 className = "article-votes"> <ArticleVotesChange article_id= {article.article_id} article_vote={article.votes}/>comments: {article.comment_count}</h5>
        <p className="article-body">{article.body}</p>
      </main>
      <section>
        <Toggle buttonName="Add a Comment">
          <CommentAdder article_id = {article.article_id} user={this.props.selectedUser} handleCreatedMessage={this.handleCreatedMessage}/>
        </Toggle>
        {this.state.created_message && <p className="comment-message">{this.state.created_message}</p>}
        <br/>
        <Toggle buttonName={this.props.showContent ? "Hide Comments": "View Comments" }>
          <Comments article_id={article.article_id} selectedUser={this.props.selectedUser} key={1}/>
        </Toggle>
      </section>
      </div>
    );
  }
  fetchData() {
    api.getSingleArticle(this.props.article_id).then(({data: {article}}) => {
      this.setState({article, isLoading: false})
    })
    .catch(error => {
      const err = error.response
      this.setState({error: err, isLoading: false})
    })
  }
  componentDidMount(){
    this.fetchData();
  }

  handleCreatedMessage = (event) => {
    console.log(event)
    this.setState({created_message: event})
  }
}

export default SingleArticle;