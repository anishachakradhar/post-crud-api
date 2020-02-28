import React from 'react';
import './App.css';

import Header from './components/Header';
import PostContainer from './components/PostContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <PostContainer />
      <Footer />
    </div>
  );
}

export default App;
