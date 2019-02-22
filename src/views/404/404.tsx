import * as React from 'react'
import Helmet from 'react-helmet'
import { FooterCTA, Footer, Navbar } from '../../blocks'
import Section404 from './Section404'

const NotFound = () => (
  <div className="page">
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <Navbar />

    <Section404 />

    <FooterCTA />
    <Footer />
  </div>
)

export default NotFound
