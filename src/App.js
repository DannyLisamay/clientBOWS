import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Mountainfinder from './pages/mountainfinder';
import Resort from './pages/resort';
import NotFoundPage from './pages/notfoundpage';
import Compare from './pages/compare';
import TestZip from './components/Testzip/testzipcode';

function App() {
  return (
    <div class="content">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/mountainfinder' component={Mountainfinder} />
          <Route path='/resort' component={Resort} />
          <Route path='/compare' component={Compare} />
          <Route path='/testzipcode' component={TestZip} />
          <Route path="*" component={NotFoundPage} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
