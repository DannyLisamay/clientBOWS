import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Mountainfinder from './pages/mountainfinder';
import Resort from './components/Resort/Resort';
import NotFoundPage from './pages/notfoundpage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/mountainfinder' component={Mountainfinder} />
        <Route path='/resort' component={Resort} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
