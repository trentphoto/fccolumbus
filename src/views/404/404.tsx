import * as React from 'react'
import Helmet from 'react-helmet'
import { Button, FooterCTA, Footer, Navbar, Section } from '../../blocks'

const NotFound = () => (
  <div className="page">
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <Navbar />

    <Section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Page not found.</h1>
            <p>
              We're sorry for the error. You can go to our homepage or explore
              via the Menu button at the top right of this page.
            </p>
            <Button isLink to="/">
              Go Home?
            </Button>
          </div>
        </div>
      </div>
    </Section>

    <FooterCTA />
    <Footer />
  </div>
)

export default NotFound
