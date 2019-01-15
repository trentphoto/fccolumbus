import React from 'react'
import styled from '../../styled-components'
import Section from '../../components/layout/Section'
import H3 from '../../components/layout/H3'

const StyledButton = styled.button`
  min-width: 110px;
`

const FooterCTA: React.SFC = props => (
  <Section bg="dark">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <H3 fs={16}>Subscribe to our Newsletter</H3>
          <p className="mb-0">Get updates from First Church.</p>
        </div>
        <div className="col-md-6">
          <form className="d-flex">
            <input
              type="enail"
              name="email"
              placeholder="Your Email"
              className="form-control mr-1"
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
      </div>
    </div>
  </Section>
)

export default FooterCTA
