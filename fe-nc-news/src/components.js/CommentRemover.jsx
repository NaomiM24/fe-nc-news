import React from 'react';
import * as api from '../api';
import {navigate} from '@reach/router'

const CommentRemover = ({comment_id, article_id}) => {
  //console.log(comment_id)
  const goto = `/articles/${article_id}`
  const handleClick = (event) =>{
    api.deleteComment(comment_id).then(() => {
      navigate(goto)
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