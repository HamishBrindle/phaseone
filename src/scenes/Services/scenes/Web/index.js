import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Web extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div>
        Web
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Web)
