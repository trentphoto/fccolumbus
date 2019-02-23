import React from 'react'
import { ReduxState } from '../../../types/redux'

import SingleEvent from './SingleEvent'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import MainTemplate1 from './MainTemplate'

interface Props extends RouteComponentProps<MatchParams> {
  page: ProcessedPage
  pages: ReduxState['pages']['allPages']
  events: ReduxState['events']['allEvents']
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
          <Route exact path="/gather/events" render={this.MainTemplate} />
          <Route
            path="/gather/events/:slug"
            render={props => <SingleEvent {...this.props} {...props} />}
          />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  pages: state.pages.allPages,
  events: state.events.allEvents
})

export default connect(mapStateToProps)(EventsPage)
