import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import './style.css';

import AllProjects from '../AllProjects'
import Landing from '../Landing'
import Navigation from '../../components/Navigation'
import NotFound from '../../components/NotFound'

class App extends Component {
  render() {

    return (
      <ParallaxProvider>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/projects' component={AllProjects} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Navigation />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;