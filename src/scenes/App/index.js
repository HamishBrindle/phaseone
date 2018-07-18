import React, { Component } from 'react';
import './style.css';
import { Switch, Route } from 'react-router-dom'

import Navigation from '../../components/Navigation'
import Landing from '../../scenes/Landing'
import Services from '../../scenes/Services'
import Projects from '../../scenes/Projects'
import Contact from '../../scenes/Contact'
import NotFound from '../../components/NotFound'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <main>

        </main>

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/services' component={Services} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>

      </div>

    );
  }
}

export default App;
