import React from 'react'
import Helmet from 'react-helmet'
import { urlBase, titleBase } from '../config'

interface SEO {
  title: string
}

const setTitle = (title: string) => {
  if (title === 'Home') return titleBase
  return `${title} | ${titleBase}`
}

export const wrapTitle = (title: string) => `${title} | ${titleBase}`

const ogImage = `${urlBase}/admin/fcc/app/uploads/2019/01/fcc-41.jpg`
const website = 'https://first-church.org'
const desc = 'A genuinely welcoming faith community, in downtown Columbus Ohio.'

const data = (seo: SEO) => (
  <Helmet>
    <title>{setTitle(seo.title)}</title>
    <meta name="description" content={desc} />
    <link rel="canonical" href={website} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={setTitle(seo.title)} />
    <meta property="og:description" content={desc} />
    <meta property="og:url" content={website} />
    <meta property="og:site_name" content="FirstChurch" />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:secure_url" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:title" content={setTitle(seo.title)} />
    {/* <meta name="twitter:site" content="@uls" /> */}
    <meta name="twitter:image" content={ogImage} />
    {/* <meta name="twitter:creator" content="@uls" /> */}
  </Helmet>
)

const withSEO = (WrappedComponent: any, seo: SEO) => {
  return class extends React.Component {
    render() {
      return (
        <>
          {data(seo)}
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
}

export default withSEO
