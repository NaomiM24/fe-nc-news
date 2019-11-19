import React from 'react';
import { Link  } from '@reach/router'

const ArticleCard = ({article}) => {
  const myLink = `/authors/${article.author}`
  //console.log(article.votes)
  //console.log(new Date(article.created_at))
  return (
    
    <div className="article-card">
      <li>
        <h3>
          {article.title}
        </h3>
        <h4>
          by: <Link to= {myLink}> {article.author}</Link>
          <br/>
          in: {article.topic}
        </h4>
        <h5>
          published at: {article.created_at}
        </h5>
      </li>
    </div>
  );
};

export default ArticleCard;