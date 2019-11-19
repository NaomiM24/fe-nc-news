import React from 'react';
import PatchCommentVotes from './PatchCommentVotes';

const CommentCard = ({comment}) => {
  console.log(comment)
  return (
    <div className="comment-card">
      <li>
      <h3>
        {console.log(comment.author)}
          posted by: {comment.author}
        </h3>
        <h4>
           votes: {comment.votes}
           <PatchCommentVotes comment_id= {comment.comment_id}/>
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