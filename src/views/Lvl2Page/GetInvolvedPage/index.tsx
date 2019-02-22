import React from 'react'
import { ReduxState } from '../../../types/redux'

import SingleGetInvolved from './SingleGetInvolved'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import MainTemplate1 from './MainTemplate'

interface Props extends RouteComponentProps<MatchParams> {
  page: ProcessedPage
  pages: ReduxState['pages']['allPages']
  news: ReduxState['news']['allNews']
  events: ReduxState['events']['allEvents']
  vols: ReduxState['vols']['allVols']
}

interface MatchParams {
  slug: string
}

class EventsPage extends React.Component<Props> {
  private MainTemplate = () => <MainTemplate1 {...this.props} />

  public render() {
    return (
      <>
        <Switch>
          <Route exact path="/serve/get-involved" render={this.MainTemplate} />
          <Route
            path="/serve/get-involved/:slug"
            render={props => <SingleGetInvolved {...this.props} {...props} />}
          />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  pages: state.pages.allPages,
  news: state.news.allNews,
  events: state.events.allEvents,
  vols: state.vols.allVols
})

export default connect(mapStateToProps)(EventsPage)
