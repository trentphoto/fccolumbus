import React from 'react'
import Helmet from 'react-helmet'
import renderHTML from 'react-render-html'
import { Link } from 'react-router-dom'

import './Blog.css'
import { fetchAllPages } from '../../modules/ducks/pages/operations'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

interface Props {
  pages: ReduxState['pages']['allPages']
  fetchPages: () => Promise<void>
}

class Blog extends React.Component<Props> {
  public componentDidMount() {
    const { pages, fetchPages } = this.props
    if (pages.data.length === 0) {
      fetchPages()
    }
  }

  public render() {
    return (
      <div className="blog page">
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <h1>Blog</h1>

        {this.props.pages.data.map((page: WPPage) => (
          <div key={page.id} style={{ maxWidth: '720px' }}>
            <h1>{renderHTML(page.title.rendered)}</h1>
            <React.Fragment>
              {renderHTML(page.content.rendered.substring(0, 100))}...
            </React.Fragment>
            <p>
              Link:{' '}
              <Link to={`/blog/${page.slug}`}>Click here to read more.</Link>
            </p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  pages: state.pages.allPages
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPages: () => fetchAllPages()(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
