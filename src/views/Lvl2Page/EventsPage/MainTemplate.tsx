import React from 'react'
import { Breadcrumbs, Card } from '../../../blocks'
import Section from '../../../components/layout/Section'
import { ReduxState } from '../../../types/redux'

interface Props {
  page: WPPage
  pages: ReduxState['pages']['allPages']
  news: ReduxState['news']['allNews']
  events: ReduxState['events']['allEvents']
  fetchPages: () => Promise<void>
  fetchNews: () => Promise<void>
  fetchEvents: () => Promise<void>
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

export default MainTemplate
