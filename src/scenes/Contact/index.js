import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './style.css'

export class Contact extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }

  render() {
    return (
      <div id="contact" className='dope-bg contact-container flex-center'>

        <div className="content flex-center">
          <div className="content-section text-left">
            <div className="content-section-indicator">
              <div className="description">
                LET'S CHAT
              </div>
              <div className="number">
                05
              </div>
            </div>
            <h2 className="content-section-header">CONTACT</h2>
            <div className="content-section-body">
              <p>
                Let us know what you've got cooking - we'd love to help you building something amazing!
                You can contact us via email, phone or telekinesis:
              </p>
              <div className="our-info">
                <div className="info">
                  <p className="title">EMAIL</p>
                  <p className="body">info@phaseone.com</p>
                </div>
                <div className="info">
                  <p className="title">PHONE</p>
                  <p className="body">(604) 888-9999</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-group underline">
              <label for="name">Name</label>
              <input type="text" className="form-control" name="name" id="" placeholder="" />
            </div>
            <div className="form-group underline">
              <label for="email">Email</label>
              <input type="email" className="form-control" name="email" id="" placeholder="" />
            </div>
            <div className="form-group underline">
              <label for="message">Message</label>
              <textarea className="form-control" name="message" id="" placeholder="" />
            </div>
            <button className="button-dark contact-form-submit">send</button>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
