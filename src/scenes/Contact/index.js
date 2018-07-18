import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Contact extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div>
        Contact
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
