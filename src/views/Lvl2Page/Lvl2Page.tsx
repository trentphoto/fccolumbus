import React from 'react'
import Helmet from 'react-helmet'

import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import H1 from '../../components/layout/H1'
import img1 from '../../img/fcc-41.jpg'
import styled from '../../styled-components'
import {
  Breadcrumbs,
  Content,
  Footer,
  FooterCTA,
  Navbar,
  Section,
  SubpageNavBoxes,
  Loader
} from '../../blocks'

import StaffPage from './StaffPage'
import NewsPage from './NewsPage'
import EventsPage from './EventsPage'
import { fetchEverything } from '../../modules/utils/fetchEverything'
import { wrapTitle } from '../../utils/withSEO'
import PastorsBlogPage from './PastorsBlogPage'

const Copy = styled.section`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

interface Props extends RouteComponentProps<MatchParams> {
  pages: ReduxState['pages']['allPages']['data']
  page: ProcessedPage
  subpages: ProcessedPage[]
  fetchAll: () => any
}

interface MatchParams {
  slug: string
}

class Lvl2Page extends React.Component<Props> {
  public componentDidMount() {
    const { pages, fetchAll } = this.props

    if (pages.length === 0) {
      fetchAll()
    }
  }

  Lvl2PageTemplate = () => {
    const { page, subpages, match } = this.props

    return (
      <>
        <Helmet>
          <title>{page && wrapTitle(page.title)}</title>
        </Helmet>
        <Copy>
          <div className="p-5">
            <H1>{page ? page.title : 'Loading...'}</H1>
            <Content content={page && page.content} />
          </div>
          <div>
            <img
              src={page && (page.img ? page.img : img1)}
              alt={page && page.title}
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

  private Lvl3PageTemplate(page: ProcessedPage) {
    if (page.id === 19) return <StaffPage {...this.props} />

    if (page.id === 297) return <PastorsBlogPage {...this.props} />

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
          <title>{page && wrapTitle(page.title)}</title>
        </Helmet>
        <Breadcrumbs
          levels={3}
          lvl2Link={
            '/' +
            this.props.pages.filter(
              (i: ProcessedPage) => i.id === page.parent
            )[0].slug
          }
          lvl2Label={
            this.props.pages.filter(
              (i: ProcessedPage) => i.id === page.parent
            )[0].title
          }
          lvl3Label={page && page.title}
        />
        <Section>
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  src={page && page.img ? page.img : img1}
                  alt={page && page.title}
                  className="img-fluid w-50 pl-5 pb-3 float-right"
                />
                <H1>{page && page.title}</H1>
                <Content content={page && page.content} />
              </div>
            </div>
          </div>
        </Section>
      </>
    )
  }

  public render() {
    const { page, subpages, match, location } = this.props

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

        {/* this displays the Loader on both 2nd and 3rd level pages */}
        {!page && <Loader />}

        <FooterCTA />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => ({
  pages: state.pages.allPages.data,
  page: state.pages.allPages.data.filter(
    (i: ProcessedPage) => i.slug === ownProps.match.path.split('/')[1]
  )[0],
  subpages: state.pages.allPages.data.filter((i: ProcessedPage) => {
    const parentPage = state.pages.allPages.data.filter(
      (i: ProcessedPage) => i.slug === ownProps.match.path.split('/')[1]
    )[0]
    return i.parent === parentPage.id
  })
})

const MapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAll: () => fetchEverything(dispatch)
})

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(Lvl2Page)
