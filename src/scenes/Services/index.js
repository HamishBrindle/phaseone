import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Services extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }


  render() {
    return (
      <div className='wrapper'>
        <h1>Services</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Services)
