import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Photo from './scenes/Photo'
import Video from './scenes/Video'
import Web from './scenes/Web'
import NotFound from '../../components/NotFound'

export class Services extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  componentDidMount() {
    console.log(`${this.props.match.path}/photo`);
  } 

  render() {
    return (
      <div>
        Services
        <Route exact path={`${this.props.match.path}/photo`} component={Photo}/>
        <Route exact path={`${this.props.match.path}/video`} component={Video}/>
        <Route exact path={`${this.props.match.path}/web`} component={Web}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Services)
