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
import { StaffPage } from '..'

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
    if (page.id === 19) return <StaffPage />

    return (
      <>
        <Helmet>
          <title>{page && page.title.rendered}</title>
        </Helmet>
        <section className="py-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <Breadcrumbs parentID={page.parent} page={page && page} />
              </div>
            </div>
          </div>
        </section>
        <Section>
          <div className="container">
            <div className="row">
              <div className="col">
                <H1>{page && page.title.rendered}</H1>
                <img
                  src={img1}
                  alt={page && page.title.rendered}
                  className="img-fluid w-50 pl-3 pb-3 float-right"
                />
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
    const { subpages, match } = this.props
    return (
      <div className="page">
        <Navbar />
        <Switch>
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
