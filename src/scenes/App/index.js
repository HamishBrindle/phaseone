import React, { Component } from 'react';
import './style.css';
import { Switch, Route } from 'react-router-dom'

import Navigation from '../../components/Navigation'
import Landing from '../Landing'
import Projects from '../Projects'
import Contact from '../Contact'
import Services from '../Services'
import Photo from '../Services/scenes/Photo'
import Video from '../Services/scenes/Video'
import Web from '../Services/scenes/Web'
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
          <Route exact path='/services/photo' component={Photo}/>
          <Route exact path='/services/video' component={Video}/>
          <Route exact path='/services/web' component={Web}/>
          <Route exact path='/services' component={Services} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>

      </div>

    );
  }
}

export default App;
