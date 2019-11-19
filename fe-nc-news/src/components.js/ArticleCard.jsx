import React from 'react';
import { Link  } from '@reach/router'
import ArticleVotesChange from './ArticleVotesChange'

const ArticleCard = ({article}) => {
  const ArticleLink = `/articles/${article.article_id}`
  const AuthorLink = `/authors/${article.author}`
  const TopicLink = `/topics/${article.topic}`
  //console.log(article.votes)
  //console.log(new Date(article.created_at))
  return (
    
    <div className="article-card">
      <li>
        <h2>
          <Link to = {ArticleLink}>{article.title}</Link>
        </h2>
        <h3>
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
      </li>
    </div>
  );
};

export default ArticleCard;