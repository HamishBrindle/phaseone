import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Services)
