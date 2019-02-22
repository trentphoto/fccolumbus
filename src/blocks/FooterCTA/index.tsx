import React from 'react'
import styled from '../../styled-components'
import { Section } from '..'
import H3 from '../../components/layout/H3'
import axios from 'axios'
import Loader from '../Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zapierEmailWebhook } from '../../config'

const StyledButton = styled.button`
  min-width: 110px;
`

class FooterCTA extends React.Component {
  state = {
    loading: false,
    success: false,
    error: ''
  }

  private emailRef = React.createRef<HTMLInputElement>()

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (this.emailRef.current && this.emailRef.current.value.length > 0) {
      const val = this.emailRef.current.value

      const regexp = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

      if (regexp.test(val)) {
        this.setState({ loading: true })

        axios.get(`${zapierEmailWebhook}?email=${val}`).then(res => {
          if (res.status === 200) {
            this.setState({ loading: false, success: true })
          } else {
            this.setState({ loading: false, error: res.statusText })
          }
        })
      }
    }
  }

  render() {
    return (
      <Section bg="dark">
        <div className="container">
          <div className="row">
            {this.state.loading ? ( // loading state
              <Loader light />
            ) : this.state.success ? ( // submitted + success state
              <div className="col text-center">
                <FontAwesomeIcon icon="check-circle" size="3x" />
                <p>Thank you! Please check your email for a confirmation.</p>
              </div>
            ) : this.state.error ? (
              <div className="col text-center">
                <FontAwesomeIcon icon="frown" size="3x" className="mb-3" />
                <p>
                  We're sorry, there seems to have been an error. Please try
                  again soon.
                </p>
                <p>Error: {this.state.error}</p>
              </div>
            ) : (
              // default unsubmitted state
              <>
                <div className="col-md-6">
                  <H3 fs={16}>Subscribe to our Newsletter</H3>
                  <p className="mb-0">Get updates from First Church.</p>
                </div>
                <div className="col-md-6">
                  <form className="d-flex" onSubmit={this.onSubmit}>
                    <input
                      type="enail"
                      name="email"
                      placeholder="Your Email"
                      className="form-control mr-1"
                      ref={this.emailRef}
                    />
                    <StyledButton
                      type="submit"
                      name="submit"
                      value="submit"
                      className="btn btn-light"
                    >
                      Get Updates
                    </StyledButton>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </Section>
    )
  }
}

export default FooterCTA
