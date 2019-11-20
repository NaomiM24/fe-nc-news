import React from 'react';
import { Link  } from '@reach/router'
import Topics from './Topics';
import Toggle from './Toggle'


const Header = () => {
  return (
    <header>
      <h1>northcoders news</h1>
      <nav>
        <Link to="/">Home</Link>
        <Toggle buttonName="Topics">
          <Topics />
        </Toggle>
      </nav>
    </header>
  );
};

export default Header;    