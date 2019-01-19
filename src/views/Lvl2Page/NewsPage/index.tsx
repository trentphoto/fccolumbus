import React from 'react'
import Helmet from 'react-helmet'

import { fetchAllPages } from '../../../modules/ducks/pages/operations'
import { fetchAllNews } from '../../../modules/ducks/news/operations'
import { fetchAllEvents } from '../../../modules/ducks/events/operations'
import { ReduxState } from '../../../types/redux'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Section from '../../../components/layout/Section'
import { Card, Breadcrumbs } from '../../../blocks'
import { RouteComponentProps } from 'react-router'
import { Switch, Route } from 'react-router'

import SingleTemplateNews from './SingleTemplateNews'

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

class NewsPage extends React.Component<Props> {
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

  private MainTemplate = () => {
    return (
      <>
        <Breadcrumbs
          levels={3}
          lvl2Label="Connect"
          lvl2Link="/connect"
          lvl3Label="News"
        />

        <Section>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>First Church News</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.page.content.rendered
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card.CardGrid>
                  {this.props.news.data.map((i: ProcessedNews) => (
                    <Card.Card
                      key={i.title}
                      title={i.title}
                      excerpt={i.excerpt}
                      img={i.img}
                      isLink
                      link={`/connect/news/${i.slug}`}
                    />
                  ))}
                </Card.CardGrid>
              </div>
            </div>
          </div>
        </Section>
      </>
    )
  }

  public render() {
    return (
      <>
        <Helmet>
          <title>First Church News</title>
        </Helmet>

        <Switch location={this.props.location}>
          <Route exact path="/connect/news" render={this.MainTemplate} />
          <Route path={`/connect/news/:slug`} component={SingleTemplateNews} />
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
)(NewsPage)
