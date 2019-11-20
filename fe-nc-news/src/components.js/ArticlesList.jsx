import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import * as api from '../api';
import ErrorPage from './ErrorPage';

class ArticlesList extends Component {
  state = {
    articles: [],
    author: '',
    topic: '',
    sort_by: null,
    order: null,
    isLoading: true,
    error: null,
  }
  render() {
    const {isLoading, error} = this.state
    if (isLoading){
      return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading..."/>
    } 
    if (error !== null){
      return <ErrorPage msg={error.data.msg} status ={error.status}/>
    }

     
    return (
      <div>
       
        <form>
          <label>
            Sort By:
            <select onChange={this.handleSelectChange}>
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
            </select>
          </label>
          <label>
            Order By:
            Ascending<input type="radio" name="order" value="asc" defaultChecked onClick={this.handleClick}/>
            Descending<input type="radio" name="order" value="desc" onClick={this.handleClick}/>
          </label>
        </form>
        <ul id = "article-list">
          {this.state.articles.map(article => {
            return (
              // <Link key={article.article_id} to={`/articles/${article.article_id}`}> 
                <ArticleCard article={article} key={article.article_id}/>
              /* </Link> */            
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
    //console.log(this.state.order)
    if (prevProps.topicName !== this.props.topicName ||prevProps.authorName !== this.props.authorName ||prevState.sort_by !== this.state.sort_by ||prevState.order !== this.state.order)
    this.fetchArticles()
  }

  fetchArticles() {
    const {topicName, authorName} = this.props
    const {sort_by, order} = this.state
    api.getAllArticles(topicName, authorName, sort_by,
      order)
    .then(({data: {articles}}) => {
      this.setState({articles, isLoading: false, topic: topicName, author: authorName, sort_by, order
      })
    })
      .catch(error => {
        const err = error.response
        this.setState({error: err, isLoading: false})
        })
  }

  handleSelectChange = (event) => {
    const sort_by = event.target.value;
    this.setState({sort_by})
  }

  handleClick = (event) => {
    const order = event.target.value;
    this.setState({order})
  }
}

export default ArticlesList;