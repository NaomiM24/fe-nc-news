import React from 'react';
import { Link  } from '@reach/router'
import styles from '../css modules/Nav.module.css'


const Topics = () => {
  return (
    <nav>
      <ul className={styles.ul}>
        <li className={styles.li}><Link to ="/topics/coding">Coding</Link></li>
        <li className={styles.li}><Link to ="/topics/football">Football</Link></li>
        <li className={styles.li}><Link to ="/topics/cooking">Cooking</Link> </li>
      </ul>
    </nav>
  );
};

export default Topics;