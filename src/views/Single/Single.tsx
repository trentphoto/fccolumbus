import React from 'react'
import Helmet from 'react-helmet'
import { fetchAllPages } from '../../modules/ducks/pages/operations'
import renderHTML from 'react-render-html'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'

interface Props {
  pages: ReduxState['pages']['allPages']
  post: ReduxState['pages']['page']
  fetchPages: () => Promise<void>
}

class Single extends React.Component<Props> {
  public componentDidMount() {
    // if data isn't loaded yet, fetch it and load it into redux store
    const { pages, fetchPages } = this.props
    if (pages.data.length === 0) {
      fetchPages()
    }
  }

  render() {
    return (
      <div className="about page">
        <Helmet>
          <title>Single Post</title>
        </Helmet>
        <h1>
          {renderHTML(this.props.post ? this.props.post.title.rendered : '')}
        </h1>
        <React.Fragment>
          {renderHTML(this.props.post ? this.props.post.content.rendered : '')}
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => ({
  pages: state.pages.allPages,
  page: state.pages.allPages.data.filter(
    i => i.slug === ownProps.match.params.slug
  )[0]
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPages: () => fetchAllPages()(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single)
