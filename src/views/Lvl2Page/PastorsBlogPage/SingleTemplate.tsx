// this component is passed a :slug via withRouter()

import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { ReduxState } from '../../../types/redux'
import { getMonthName, getDayName } from '../../../utils/dates'

import { Breadcrumbs, Button, Section, Content, Card } from '../../../blocks'
import H1 from '../../../components/layout/H1'
import H2center from '../../../components/layout/H2center'
import SingleFeaturedImage from './SingleFeaturedImage'
import Helmet from 'react-helmet'
import { wrapTitle } from '../../../utils/withSEO'
import Section404 from '../../404/Section404'

interface Props extends RouteComponentProps<MatchParams> {
  pages: ReduxState['pages']['allPages']
  posts: ReduxState['blogs']['allPosts']
}

interface MatchParams {
  slug: string
}

class SingleTemplate extends React.Component<Props> {
  render() {
    const post = this.props.posts.data.filter(
      (i: ProcessedNews) => i.slug === this.props.match.params.slug
    )[0]

    if (!post) return <Section404 />

    const date = new Date(post.date)
    const dateString = `${getDayName(date.getDay())}, ${getMonthName(
      date.getMonth(),
      true
    )} ${date.getDate()}, ${date.getFullYear()}`
    return (
      <>
        <Helmet>
          <title>{wrapTitle(post.title)}</title>
        </Helmet>
        <Breadcrumbs
          levels={4}
          lvl2Label="Connect"
          lvl2Link="/connect"
          lvl3Label="Pastor Tim's Blog"
          lvl3Link="/connect/pastor-tims-blog"
          lvl4Label={post.title}
        />

        <Section>
          <div className="container">
            <div className="row">
              <div className="col">
                <H1 center>
                  <span dangerouslySetInnerHTML={{ __html: post.title }} />
                </H1>
                <p className="text-center">{dateString}</p>
                {post.img && (
                  <SingleFeaturedImage
                    img={post.img}
                    alt={post.title}
                    height={200}
                  />
                )}
                <Content content={post.content} />
              </div>
            </div>
          </div>
        </Section>

        <Section bg="lightgray">
          <div className="container">
            <div className="row">
              <div className="col">
                <H2center>More Posts</H2center>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card.CardGrid>
                  {this.props.posts &&
                    this.props.posts.data
                      .filter(i => i.slug !== post.slug) // exclude the current item
                      .filter((i, ind) => ind < 3) // limit the rest of the items to 3
                      .map((i: ProcessedNews) => (
                        <Card.Card
                          key={i.title}
                          isLink
                          link={`/connect/pastor-tims-blog/${i.slug}`}
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
                <Button isLink to="/connect/pastor-tims-blog">
                  View All Posts
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </>
    )
  }
}

export default withRouter(SingleTemplate)
