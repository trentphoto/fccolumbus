import React from 'react'
import Helmet from 'react-helmet'

import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { fetchAllPages } from '../../modules/ducks/pages/operations'
import { RouteComponentProps } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../../blocks/Navbar'
import H1 from '../../components/layout/H1'
import SubpageNavBoxes from '../../blocks/SubpageNavBoxes'
import img1 from '../../img/fcc-41.jpg'
import FooterCTA from '../../blocks/FooterCTA'
import Footer from '../../components/layout/Footer'
import styled from '../../styled-components'
import Section from '../../components/layout/Section'
import Breadcrumbs from '../../blocks/Breadcrumbs'
import StaffPage from './StaffPage'
import NewsPage from './NewsPage'
import EventsPage from './EventsPage'

const Copy = styled.section`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

interface Props extends RouteComponentProps<MatchParams> {
  pages: ReduxState['pages']['allPages']['data']
  page: WPPage
  subpages: WPPage[]
  fetchPages: () => Promise<void>
}

interface MatchParams {
  slug: string
}

class Lvl2Page extends React.Component<Props> {
  public componentDidMount() {
    const { pages, fetchPages } = this.props

    if (pages.length === 0) {
      fetchPages()
    }
  }

  Lvl2PageTemplate = () => {
    const { page, subpages, match } = this.props
    return (
      <>
        <Helmet>
          <title />
        </Helmet>
        <Copy>
          <div className="p-5">
            <H1>{page ? page.title.rendered : 'Loading...'}</H1>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: page && page.content.rendered
              }}
            />
          </div>
          <div className="">
            <img
              src={img1}
              alt={page && page.title.rendered}
              className="img-fluid"
            />
          </div>
        </Copy>
        <section>
          {subpages && (
            <SubpageNavBoxes baseURL={match.path} subpages={subpages} />
          )}
        </section>

        <br />
      </>
    )
  }

  private Lvl3PageTemplate(page: WPPage) {
    if (page.id === 19) return <StaffPage {...this.props} />

    if (this.props.location.pathname.includes('news'))
      return (
        <NewsPage page={page} location={this.props.location} {...this.props} />
      )
    if (this.props.location.pathname.includes('events'))
      return (
        <EventsPage
          page={page}
          location={this.props.location}
          {...this.props}
        />
      )

    return (
      <>
        <Helmet>
          <title>{page && page.title.rendered}</title>
        </Helmet>
        <Breadcrumbs
          levels={3}
          lvl2Link={
            '/' +
            this.props.pages.filter((i: WPPage) => i.id === page.parent)[0].slug
          }
          lvl2Label={
            this.props.pages.filter((i: WPPage) => i.id === page.parent)[0]
              .title.rendered
          }
          lvl3Label={page && page.title.rendered}
        />
        <Section>
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  src={img1}
                  alt={page && page.title.rendered}
                  className="img-fluid w-50 pl-5 pb-3 float-right"
                />
                <H1>{page && page.title.rendered}</H1>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: page && page.content.rendered
                  }}
                />
              </div>
            </div>
          </div>
        </Section>
      </>
    )
  }

  public render() {
    const { subpages, match, location } = this.props
    return (
      <div className="page">
        <Navbar />
        <Switch location={location}>
          <Route exact path={match.path} render={this.Lvl2PageTemplate} />
          {subpages &&
            subpages.map(i => (
              <Route
                key={i.id}
                path={match.path + '/' + i.slug}
                render={this.Lvl3PageTemplate.bind(this, i)}
              />
            ))}
        </Switch>

        <FooterCTA />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => ({
  pages: state.pages.allPages.data,
  page: state.pages.allPages.data.filter(
    (i: WPPage) => i.slug === ownProps.match.path.split('/')[1]
  )[0],
  subpages: state.pages.allPages.data.filter((i: WPPage) => {
    const parentPage = state.pages.allPages.data.filter(
      (i: WPPage) => i.slug === ownProps.match.path.split('/')[1]
    )[0]
    return i.parent === parentPage.id
  })
})

const MapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPages: () => fetchAllPages()(dispatch)
})

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(Lvl2Page)
