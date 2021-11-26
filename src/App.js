import React from 'react';
import {GithubState} from './context/GithubContext';
import './App.css';
import Hero from './components/Hero';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <GithubState>
    <Router>
  
<Hero/>
      </Router>
    </GithubState>
  );
}

export default App;
