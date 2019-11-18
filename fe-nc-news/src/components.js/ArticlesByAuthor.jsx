import React, { Component } from 'react';
import ArticlesList from './ArticlesList';

class ArticlesByAuthor extends Component {
  render() {
    return (
      <div>
        <h2> {this.props.authorName} </h2>
        <ArticlesList authorName={this.props.authorName}/>
      </div>
    );
  }
}

export default ArticlesByAuthor;