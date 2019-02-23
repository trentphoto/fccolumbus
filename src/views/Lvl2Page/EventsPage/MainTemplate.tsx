import React from 'react'
import { Breadcrumbs, Card, Section, Content, Button } from '../../../blocks'
import { ReduxState } from '../../../types/redux'
import withSEO from '../../../utils/withSEO'
import H2center from '../../../components/layout/H2center'

interface Props {
  page: WPPage
  pages: ReduxState['pages']['allPages']
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

        <Section bg="lightgray" padding="5rem 0">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <H2center>Submit an Event</H2center>
                <p className="mb-5 lead">
                  Submit an event you are hosting in your local area that would
                  be relevant for our wider community to attend. These will be
                  posted after staff review.
                </p>
                <a href="https://fcc-columbus.typeform.com/to/tHUqsW">
                  <Button>Submit An Event</Button>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </>
    )
  }
}

export default withSEO(MainTemplate, { title: 'Events' })
