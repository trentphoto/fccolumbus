import React from 'react'
import Helmet from 'react-helmet'

import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { fetchAllPages } from '../../modules/ducks/pages/operations'
import { RouteComponentProps } from 'react-router'
import Navbar from '../../components/layout/Navbar'
import H1 from '../../components/layout/H1'
import Section from '../../components/layout/Section'
import SubpageNavBoxes from '../../blocks/SubpageNavBoxes'
import img1 from '../../img/fcc-41.jpg'

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
  public render() {
    const { page, subpages } = this.props
    return (
      <div className="page Lvl2Page">
        <Helmet>
          <title />
        </Helmet>
        <Navbar />
        <Section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <H1>{page && page.title.rendered}</H1>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: page && page.content.rendered
                  }}
                />
              </div>
              <div className="col-md-6">
                <img
                  src={img1}
                  alt={page && page.title.rendered}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </Section>
        <section>{subpages && <SubpageNavBoxes subpages={subpages} />}</section>
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
