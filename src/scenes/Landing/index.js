import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './style.css'

export class Landing extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div className='wrapper'>
        <h1>Landing</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
