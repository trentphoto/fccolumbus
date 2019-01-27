import React from 'react'
import { Breadcrumbs, Card, Section, Content } from '../../../blocks'
import { ReduxState } from '../../../types/redux'
import withSEO from '../../../utils/withSEO'

interface Props {
  page: WPPage
  pages: ReduxState['pages']['allPages']
  news: ReduxState['news']['allNews']
  events: ReduxState['events']['allEvents']
}

class MainTemplate extends React.Component<Props> {
  render() {
    return (
      <>
        <Breadcrumbs
          levels={3}
          lvl2Label="Gather"
          lvl2Link="/gather"
          lvl3Label="Events"
        />

        <Section>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Upcoming Events</h1>
                <Content content={this.props.page.content.rendered} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card.CardGrid>
                  {this.props.events.data.map((i: ProcessedEvent) => (
                    <Card.Card
                      key={i.title}
                      title={i.title}
                      excerpt={i.excerpt}
                      img={i.img}
                      isLink
                      link={`/gather/events/${i.slug}`}
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
