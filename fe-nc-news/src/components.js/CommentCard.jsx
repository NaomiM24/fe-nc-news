import React from 'react';
import CommentVotesChange from './CommentVotesChange';

const CommentCard = ({comment, article_id}) => {
  
  console.log('comment card', article_id)
  return (
    <div className="comment-card">
      <li>
      <h3>
       
          posted by: {comment.author}
        </h3>
        <h4>
           votes: {comment.votes}
           <CommentVotesChange comment_id= {comment.comment_id} />
           <p>{comment.body}</p>
        </h4>
        <h5>
         
          published at: {comment.created_at}
        </h5>

      </li>
    </div>
  );
};

export default CommentCard;