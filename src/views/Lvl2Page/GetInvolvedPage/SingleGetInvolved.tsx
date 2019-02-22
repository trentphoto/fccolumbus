import React from 'react'

import { Breadcrumbs, Button, Card, Section, Content } from '../../../blocks'
import H1 from '../../../components/layout/H1'
import H2center from '../../../components/layout/H2center'
import Section404 from '../../404/Section404'

import { ReduxState } from '../../../types/redux'
import { RouteComponentProps } from 'react-router'
import Helmet from 'react-helmet'
import { wrapTitle } from '../../../utils/withSEO'

interface Props extends RouteComponentProps<MatchParams> {
  page: ProcessedPage
  pages: ReduxState['pages']['allPages']
  news: ReduxState['news']['allNews']
  events: ReduxState['events']['allEvents']
  vols: ReduxState['vols']['allVols']
}

interface MatchParams {
  slug: string
}

class SingleGetInvolved extends React.Component<Props> {
  render() {
    const vol = this.props.vols.data.filter(
      (i: ProcessedVol) => i.slug === this.props.match.params.slug
    )[0]

    if (!vol) return <Section404 />

    return (
      <>
        <Helmet>
          <title>{wrapTitle(vol.title)}</title>
        </Helmet>

        <Breadcrumbs
          levels={4}
          lvl2Label="Serve"
          lvl2Link="/serve"
          lvl3Label="Get Involved"
          lvl3Link="/serve/get-involved"
          lvl4Label={vol.title}
        />

        <Section>
          <div className="container">
            <div className="row">
              {vol.img && (
                <div className="col-md-6">
                  <img src={vol.img} alt={vol.title} className="img-fluid" />
                </div>
              )}
              <div className="col-md-6">
                <H1>{vol.title}</H1>
                <Content content={vol.content} />
              </div>
            </div>
          </div>
        </Section>

        <Section bg="lightgray">
          <div className="container">
            <div className="row">
              <div className="col">
                <H2center>More Volunteer Opportunities</H2center>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Card.CardGrid>
                  {this.props.vols &&
                    this.props.vols.data
                      .filter(i => i.slug !== vol.slug) // exclude the current item
                      .filter((i, ind) => ind < 3) // limit the rest of the items to 3
                      .map((i: ProcessedVol) => (
                        <Card.Card
                          key={i.title}
                          isLink
                          link={`/serve/get-involved/${i.slug}`}
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
                <Button isLink to="/serve/get-involved">
                  View All Volunteer Opportunities
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </>
    )
  }
}

export default SingleGetInvolved
