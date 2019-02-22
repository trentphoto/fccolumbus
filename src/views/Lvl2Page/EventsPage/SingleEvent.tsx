import React from 'react'

import { Breadcrumbs, Button, Card, Section, Content } from '../../../blocks'
import H1 from '../../../components/layout/H1'
import H2center from '../../../components/layout/H2center'

import styled from '../../../styled-components'
import { ReduxState } from '../../../types/redux'
import { RouteComponentProps } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Helmet from 'react-helmet'
import { wrapTitle } from '../../../utils/withSEO'
import Section404 from '../../404/Section404'

const InfoBox = styled.p`
  background-color: ${props => props.theme.lightgray};
  padding: 1rem;
  border-radius: 0.5rem;

  span {
    color: ${props => props.theme.redDark};
  }
`

interface Props extends RouteComponentProps<MatchParams> {
  page: ProcessedPage
  pages: ReduxState['pages']['allPages']
  news: ReduxState['news']['allNews']
  events: ReduxState['events']['allEvents']
}

interface MatchParams {
  slug: string
}

class SingleEvent extends React.Component<Props> {
  render() {
    const evt = this.props.events.data.filter(
      (i: ProcessedEvent) => i.slug === this.props.match.params.slug
    )[0]

    if (!evt) return <Section404 />

    return (
      <>
        <Helmet>
          <title>{wrapTitle(evt.title)}</title>
        </Helmet>

        <Breadcrumbs
          levels={4}
          lvl2Label="Gather"
          lvl2Link="/gather"
          lvl3Label="Events"
          lvl3Link="/gather/events"
          lvl4Label={evt.title}
        />

        <Section>
          <div className="container">
            <div className="row">
              {evt.img && (
                <div className="col-md-6">
                  <img src={evt.img} alt={evt.title} className="img-fluid" />
                </div>
              )}
              <div className="col-md-6">
                <H1>{evt.title}</H1>
                <InfoBox>
                  <span>
                    <FontAwesomeIcon
                      size="lg"
                      icon="calendar"
                      className="mr-3"
                    />
                  </span>
                  {evt.date}
                </InfoBox>
                <InfoBox>
                  <span>
                    <FontAwesomeIcon size="lg" icon="clock" className="mr-3" />
                  </span>
                  {evt.time}
                </InfoBox>
                <InfoBox>
                  <span>
                    <FontAwesomeIcon
                      size="lg"
                      icon="map-marker-alt"
                      className="mr-3"
                    />
                  </span>
                  {evt.location}
                </InfoBox>
                <Content content={evt.content} />
              </div>
            </div>
          </div>
        </Section>

        <Section bg="lightgray">
          <div className="container">
            <div className="row">
              <div className="col">
                <H2center>More Events</H2center>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card.CardGrid>
                  {this.props.events &&
                    this.props.events.data
                      .filter(i => i.slug !== evt.slug) // exclude the current item
                      .filter((i, ind) => ind < 3) // limit the rest of the items to 3
                      .map((i: ProcessedEvent) => (
                        <Card.Card
                          key={i.title}
                          isLink
                          link={`/gather/events/${i.slug}`}
                          title={i.title}
                          excerpt={i.excerpt}
                          img={i.img && i.img}
                        />
                      ))}
                </Card.CardGrid>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <Button isLink to="/gather/events">
                  View All Events
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </>
    )
  }
}

export default SingleEvent
