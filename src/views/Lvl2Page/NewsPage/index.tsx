import React from 'react'
import Helmet from 'react-helmet'

import { ReduxState } from '../../../types/redux'
import { connect } from 'react-redux'
import { Card, Breadcrumbs, Section, Content } from '../../../blocks'
import { RouteComponentProps } from 'react-router'
import { Switch, Route } from 'react-router'

import SingleTemplateNews from './SingleTemplateNews'
import { wrapTitle } from '../../../utils/withSEO'

interface Props extends RouteComponentProps<MatchParams> {
  page: ProcessedPage
  pages: ReduxState['pages']['allPages']
  news: ReduxState['news']['allNews']
  events: ReduxState['events']['allEvents']
}

interface MatchParams {
  slug: string
}

class NewsPage extends React.Component<Props> {
  private MainTemplate = () => {
    return (
      <>
        <Helmet>
          <title>{wrapTitle('News')}</title>
        </Helmet>
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
                <Content content={this.props.page.content} />
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
      <Switch location={this.props.location}>
        <Route exact path="/connect/news" render={this.MainTemplate} />
        <Route path={`/connect/news/:slug`} component={SingleTemplateNews} />
      </Switch>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  pages: state.pages.allPages,
  news: state.news.allNews,
  events: state.events.allEvents
})

export default connect(mapStateToProps)(NewsPage)
