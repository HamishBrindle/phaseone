import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import pixels from '../../assets/Contact/contact-pixels.svg'
import * as constants from '../../constants';

import './style.css'

export class Contact extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   }
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(e) {
    const { name, email } = this.state;
    if ((!name || name === '') ||
    (!email || email === '')) {
      this.displayError();
      e.preventDefault();
    } else {
      console.log('GOT THE VALUES:', this.state);
      e.submit();
    }
  }

  displayError() {
    console.log('ERROR:', this.state);
  }

  render() {
    return (
      <div id="contact" name="contact" className='dope-bg contact-container flex-center'>
        <img className="artwork" src={pixels} alt="Pixel Art"/>
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
                Send over your name and email and we'll get back to you as soon as we can - we'd love to help you building something amazing!
                <br/><br/>
                You can also contact us directly at our email or phone listed here.
              </p>
              <div className="our-info">
                <div className="info">
                  <p className="title">EMAIL</p>
                  <p className="body">{ constants.EMAIL }</p>
                </div>
                <div className="info">
                  <p className="title">PHONE</p>
                  <p className="body">{ constants.PHONE_NUMBER }</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={this.handleSubmit} action="https://phaseonemkt.us19.list-manage.com/subscribe/post" method="POST" className="contact-form">
            <input type="hidden" name="u" value="b218fa09e72c953590149d733"/>
            <input type="hidden" name="id" value="aff9035c4c"/>

            <div className="form-group underline">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="MERGE1" id="MERGE1" onChange={this.handleName} required/>
            </div>
            <div className="form-group underline">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" name="MERGE0" id="MERGE0" onChange={this.handleEmail} required/>
            </div>
            <button type="submit" className="button-dark contact-form-submit">send</button>
          </form>

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
