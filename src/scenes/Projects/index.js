import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './style.css'

export class Projects extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div className='dope-bg projects-container'>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
