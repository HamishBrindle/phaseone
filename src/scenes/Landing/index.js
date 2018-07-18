import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Landing extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div>
        Landing
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
