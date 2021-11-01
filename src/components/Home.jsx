import React from 'react';
import '../styles/Home.css';
import Details from './Details';
import Editor from './Editor';
import Store from './Store';

const Home = () => {
  return (
    <div id='home'>
      <Editor />
      <Details />
      <Store />
    </div>
  );
};

export default Home;
