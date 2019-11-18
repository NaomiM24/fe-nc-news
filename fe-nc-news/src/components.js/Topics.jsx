import React from 'react';
import { Link  } from '@reach/router'


const Topics = () => {
  return (
    <div>
      <Link to ="/topics/coding">Coding</Link>
      <Link to ="/topics/football">Football</Link>
      <Link to ="/topics/cooking">Cooking</Link>
    </div>
  );
};

export default Topics;