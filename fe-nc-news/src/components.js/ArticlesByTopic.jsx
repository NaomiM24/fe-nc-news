import React, { Component } from 'react';
import ArticlesList from './ArticlesList';

class ArticlesByTopic extends Component {
  
  render() {
    return (
      <main>
        <h2> {this.props.topicName} </h2>
        <ArticlesList topicName={this.props.topicName}/>
      </main>
    );
  }
}

export default ArticlesByTopic;