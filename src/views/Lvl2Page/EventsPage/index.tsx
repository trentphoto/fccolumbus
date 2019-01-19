import React from 'react'
// import Helmet from 'react-helmet'
import { fetchAllEvents } from '../../../modules/ducks/events/operations'
import { fetchAllNews } from '../../../modules/ducks/news/operations'
import { fetchAllPages } from '../../../modules/ducks/pages/operations'
import { ReduxState } from '../../../types/redux'

import SingleEvent from './SingleEvent'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import MainTemplate1 from './MainTemplate'

interface Props extends RouteComponentProps<MatchParams> {
  page: WPPage
  pages: ReduxState['pages']['allPages']
  news: ReduxState['news']['allNews']
  events: ReduxState['events']['allEvents']
  fetchPages: () => Promise<void>
  fetchNews: () => Promise<void>
  fetchEvents: () => Promise<void>
}

interface MatchParams {
  slug: string
}

class EventsPage extends React.Component<Props> {
  public componentDidMount() {
    const {
      pages,
      fetchPages,
      news,
      fetchNews,
      events,
      fetchEvents
    } = this.props
    if (!pages || pages.data.length === 0) {
      fetchPages()
    }
    if (!news || news.data.length === 0) {
      fetchNews()
    }
    if (!events || events.data.length === 0) {
      fetchEvents()
    }
  }

  private MainTemplate = () => <MainTemplate1 {...this.props} />

  // private SingleEvent = () => (
  //     <SingleEvent {...this.props} />
  // )

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
  news: state.news.allNews,
  events: state.events.allEvents
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPages: () => fetchAllPages()(dispatch),
  fetchNews: () => fetchAllNews()(dispatch),
  fetchEvents: () => fetchAllEvents()(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsPage)
