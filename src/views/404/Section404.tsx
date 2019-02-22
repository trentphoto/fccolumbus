import React from 'react'
import { Button, Section } from '../../blocks'

export default () => (
  <Section>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Page not found.</h1>
          <p>
            We're sorry for the error. You can go to our homepage or explore via
            the Menu button at the top right of this page.
          </p>
          <Button isLink to="/">
            Go Home?
          </Button>
        </div>
      </div>
    </div>
  </Section>
)
