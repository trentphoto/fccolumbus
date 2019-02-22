// this component is passed a :slug via React-router-dom.
// it connects to our redux store and finds the corresponding post based on the :slug.
// if posts are not loaded it should load all posts and other site data.

import React from 'react'
import { RouteComponentProps } from 'react-router'
import { connect } from 'react-redux'
import { ReduxState } from '../../../types/redux'
import { getMonthName, getDayName } from '../../../utils/dates'
import Section404 from '../../404/Section404'

import { Breadcrumbs, Button, Card, Section, Content } from '../../../blocks'
import H1 from '../../../components/layout/H1'
import H2center from '../../../components/layout/H2center'
import SingleFeaturedImage from './SingleFeaturedImage'
import Helmet from 'react-helmet'
import { wrapTitle } from '../../../utils/withSEO'

interface Props extends RouteComponentProps<MatchParams> {
  pages: ReduxState['pages']['allPages']['data']
  news: ReduxState['news']['allNews']['data']
  newsItem: ProcessedNews
}

interface MatchParams {
  slug: string
}

class SingleTemplateNews extends React.Component<Props> {
  render() {
    const { news, newsItem } = this.props

    if (!newsItem) return <Section404 />

    const date = new Date(newsItem.date)
    const dateString = `${getDayName(date.getDay())}, ${getMonthName(
      date.getMonth(),
      true
    )} ${date.getDate()}, ${date.getFullYear()}`
    return (
      <>
        <Helmet>
          <title>{wrapTitle(newsItem.title)}</title>
        </Helmet>
        <Breadcrumbs
          levels={4}
          lvl2Label="Connect"
          lvl2Link="/connect"
          lvl3Label="News"
          lvl3Link="/connect/news"
          lvl4Label={newsItem && newsItem.title}
        />

        <Section>
          <div className="container">
            <div className="row">
              <div className="col">
                <H1 center>{newsItem && newsItem.title}</H1>
                <p className="text-center">{newsItem && dateString}</p>
                {newsItem && newsItem.img && (
                  <SingleFeaturedImage
                    img={newsItem.img}
                    alt={newsItem.title}
                    height={200}
                  />
                )}
                <Content content={newsItem && newsItem.content} />
              </div>
            </div>
          </div>
        </Section>

        <Section bg="lightgray">
          <div className="container">
            <div className="row">
              <div className="col">
                <H2center>More News</H2center>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card.CardGrid>
                  {news &&
                    news
                      .filter(i => i.slug !== newsItem.slug) // exclude the current item
                      .filter((i, ind) => ind < 3) // limit the rest of the items to 3
                      .map((i: ProcessedNews) => (
                        <Card.Card
                          key={i.title}
                          isLink
                          link={`/connect/news/${i.slug}`}
                          title={i.title}
                          excerpt={i.excerpt}
                          img={i.img}
                        />
                      ))}
                </Card.CardGrid>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <Button isLink to="/connect/news">
                  View All News
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </>
    )
  }
}

const mapStateToProps = (state: ReduxState, ownProps: Props) => ({
  pages: state.pages.allPages.data,
  news: state.news.allNews.data,
  newsItem: state.news.allNews.data.filter(
    (i: ProcessedNews) => i.slug === ownProps.match.params.slug
  )[0]
})

export default connect(mapStateToProps)(SingleTemplateNews)
