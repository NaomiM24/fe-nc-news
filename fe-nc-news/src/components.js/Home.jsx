import React from 'react';
import ArticlesList from './ArticlesList';
import SelectUser from './SelectUser';

const Home = () => {
    return (
      <main className="homepage">
      <SelectUser />
      <section className="articles-list">
        <ArticlesList />
        
      </section>
      </main>
    );
  }
  


export default Home;