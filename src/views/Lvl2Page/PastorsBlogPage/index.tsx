import React from 'react'

import { ReduxState } from '../../../types/redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Switch, Route } from 'react-router'

import SingleTemplate from './SingleTemplate'
import MainTemplate from './MainTemplate'

interface Props extends RouteComponentProps<MatchParams> {
  page: ProcessedPage
  pages: ReduxState['pages']['allPages']
  posts: ReduxState['blogs']['allPosts']
}

interface MatchParams {
  slug: string
}

class PastorsBlogPage extends React.Component<Props> {
  private MainTemplate = () => <MainTemplate {...this.props} />

  private SingleTemplate = () => <SingleTemplate {...this.props} />

  public render() {
    return (
      <Switch location={this.props.location}>
        <Route
          exact
          path="/connect/pastor-tims-blog"
          render={this.MainTemplate}
        />
        <Route
          path={`/connect/pastor-tims-blog/:slug`}
          render={this.SingleTemplate}
        />
      </Switch>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  pages: state.pages.allPages,
  posts: state.blogs.allPosts
})

export default connect(mapStateToProps)(PastorsBlogPage)
