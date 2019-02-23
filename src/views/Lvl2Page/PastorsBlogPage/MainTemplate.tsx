import React from 'react'
import { Button, Breadcrumbs, Card, Section, Content } from '../../../blocks'
import { ReduxState } from '../../../types/redux'
import withSEO from '../../../utils/withSEO'
import H1 from '../../../components/layout/H1'

interface Props {
  posts: ReduxState['blogs']['allPosts']
  pages: ReduxState['pages']['allPages']
}

class MainTemplate extends React.Component<Props> {
  render() {
    const page = this.props.pages.data.filter(
      (i: ProcessedPage) => i.slug === 'pastor-tims-blog'
    )[0]

    return (
      <>
        <Breadcrumbs
          levels={3}
          lvl2Label="Connect"
          lvl2Link="/connect"
          lvl3Label="Pastor Tim's Blog"
        />

        <Section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <H1>
                  <span dangerouslySetInnerHTML={{ __html: page.title }} />
                </H1>
                <Content content={page.content} />
                <p>
                  Click the button below to get updates on Pastor Tim's latest
                  posts.
                </p>
                <Button>Get Updates</Button>
              </div>
              <div className="col-md-6">
                <img src={page.img} alt={page.title} className="img-fluid" />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="container">
            <div className="row">
              <div className="col">
                <H1 center>Latest Posts</H1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card.CardGrid>
                  {this.props.posts.data.map((i: ProcessedNews) => (
                    <Card.Card
                      key={i.title}
                      title={i.title}
                      excerpt={i.excerpt}
                      img={i.img}
                      isLink
                      link={`/connect/pastor-tims-blog/${i.slug}`}
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
}

export default withSEO(MainTemplate, { title: 'Events' })
