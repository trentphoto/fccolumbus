import React from 'react'
import ResponsiveHOC from '../../utils/ResponsiveHOC'

import BreadcrumbsMobile from './BreadcrumbsMobile'
import BreadcrumbsDesktop from './BreadcrumbsDesktop'

interface Props {
  levels: 3 | 4
  lvl2Link: string
  lvl2Label: string
  lvl3Link?: string
  lvl3Label: string
  lvl4Link?: string
  lvl4Label?: string
}

const Breadcrumbs = (props: Props) => {
  return (
    <ResponsiveHOC
      ifAbove={() => <BreadcrumbsDesktop {...props} />}
      ifBelow={() => <BreadcrumbsMobile {...props} />}
      breakpoint={500}
    />
  )
}

export default Breadcrumbs
