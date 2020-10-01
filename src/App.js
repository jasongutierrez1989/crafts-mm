import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

const App = (props) => {
  return (
        <Router>
          <div>
          <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/shop" component={Shop} />
          </div>
        </Router>
      );
    };

export default App;
