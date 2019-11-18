import React from 'react';
import './App.css';
import Header from './components.js/Header';
import {Router} from '@reach/router'
import Home from './components.js/Home';
import ArticlesByTopic from './components.js/ArticlesByTopic';
import ArticlesByAuthor from './components.js/ArticlesByAuthor';
import SingleArticle from './components.js/SingleArticle';


function App() {
  return (
    <div className="App">
     <Header />
    <Router>
      <Home path='/'/>
      <ArticlesByTopic path='/topics/:topicName'/>
      <ArticlesByAuthor path='/authors/:authorName'/>
      <SingleArticle path='/articles/:article_id'/>
    </Router>

    </div>
  );
}

export default App;
