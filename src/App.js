import React, { Component } from "react";
import "./App.css";
import Header from "./components.js/Header";
import { Router } from "@reach/router";
import Home from "./components.js/Home";
import ArticlesByTopic from "./components.js/ArticlesByTopic";
import ArticlesByAuthor from "./components.js/ArticlesByAuthor";
import SingleArticle from "./components.js/SingleArticle";
import ErrorPage from "./components.js/ErrorPage";
import SelectUser from "./components.js/SelectUser";
import Topics from "./components.js/Topics";

class App extends Component {
  state = {
    selectedUser: "tickle122",
    error: {
      status: 404,
      msg: "Page not found"
    }
  };

  handleUserChange = event => {
    this.setState({ selectedUser: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Topics />
        <SelectUser handleUserChange={this.handleUserChange} />
        <h2>Welcome {this.state.selectedUser}!</h2>
        <Router>
          <Home path="/" />
          <ArticlesByTopic path="/topics/:topicName" />
          <ArticlesByAuthor path="/authors/:authorName" />
          <SingleArticle
            path="/articles/:article_id"
            selectedUser={this.state.selectedUser}
          />
          <ErrorPage
            default
            msg={this.state.error.msg}
            status={this.state.error.status}
          />
        </Router>
      </div>
    );
  }
}

export default App;
