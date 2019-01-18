import React from 'react'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import ResponsiveHOC from '../../utils/ResponsiveHOC'

import BreadcrumbsMobile from './BreadcrumbsMobile'
import BreadcrumbsDesktop from './BreadcrumbsDesktop'

interface Props {
  parentID: number
  parent?: WPPage
  page?: WPPage
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

const mapStateToProps = (state: ReduxState, ownProps: Props) => ({
  parent: state.pages.allPages.data.filter(i => i.id === ownProps.parentID)[0]
})

export default connect(mapStateToProps)(Breadcrumbs)
