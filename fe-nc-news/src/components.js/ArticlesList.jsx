import React, { Component } from 'react';
import {Link} from '@reach/router'
import ArticleCard from './ArticleCard';
import * as api from '../api';

class ArticlesList extends Component {
  state = {
    articles: [],
    author: '',
    topic: '',
    sort_by: '',
    order: '',
    isLoading: true,
  }
  render() {
    if (this.state.isLoading){
      return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading..."/>
    } 
     
    return (
      <div>
        <form>
          <label>
            Sort By:
            <select onChange={this.handleSelectChange}>
            <option value="created_at">Date</option>
            <option value="author">Author</option>
            <option value="comment_count">Comment Count</option>
            <option value="artcile_id">Article ID</option>
            </select>
          </label>
          <label>
            Order By:
            Ascending<input type="radio" name="order" value="asc" defaultChecked/>
            Descending<input type="radio" name="order" value="desc"/>
          </label>
        </form>
        <ul id = "article-list">
          {this.state.articles.map(article => {
            return (
              <Link key={article.article_id} to={`/articles/${article.article_id}`}> 
                <ArticleCard article={article} />
              </Link>
              
            )
             
            
          })}
        </ul>
      </div>
    );
  }

  
  componentDidMount() {
    this.fetchArticles()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props.sort_by)
    if (prevProps.topicName !== this.props.topicName ||prevProps.authorName !== this.props.authorName ||prevState.sort_by !== this.state.sort_by)
    this.fetchArticles()
  }

  fetchArticles() {
    const {topicName, authorName, sort_by} = this.props
    //const {sort_by} = this.state
    api.getAllArticles(topicName, authorName, sort_by)
    .then(({data: {articles}}) => {
      this.setState({articles, isLoading: false, topic: topicName, author: authorName, sort_by})
    })
  }

  handleSelectChange = (event) => {
    const sort_by = event.target.value;
    this.setState({sort_by})
  }
}

export default ArticlesList;