import React from 'react';
import * as api from '../api';
import {navigate} from '@reach/router'

const CommentRemover = ({comment_id, article_id, removeComments}) => {
  
  const handleClick = (event) =>{
    removeComments(comment_id)
    api.deleteComment(comment_id).then(() => {
      
      console.log('deleted')
    })
  }
  return (
    <>
      <button onClick={handleClick}>Remove Comment</button>
    </>
  );
};

export default CommentRemover;