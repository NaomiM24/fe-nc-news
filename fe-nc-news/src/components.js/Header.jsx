import React from 'react';
import { Link  } from '@reach/router'

const Header = () => {
  return (
    <div>
      <h1>NC News</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
      </nav>
    </div>
  );
};

export default Header;    