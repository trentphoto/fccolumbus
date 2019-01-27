import React from 'react'
import StyledTakeover from '../MenuTakeover/StyledTakeover'
import Exit from '../MenuTakeover/Exit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Button } from '..';
import { connect } from 'react-redux'
import { closeSearch } from '../../modules/ducks/layout/operations'
import { Dispatch } from 'redux'
import { withRouter, RouteComponentProps } from 'react-router'

interface SearchTakeoverProps extends RouteComponentProps {
  closeSearch: () => any
}

class SearchTakeover extends React.Component<SearchTakeoverProps> {
  componentDidMount() {
    document.addEventListener('keydown', this.closeWithEsc, false)
    document.addEventListener('keydown', this.closeWithEnter, false)
    this.searchRef.current && this.searchRef.current.focus()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeWithEsc, false)
    document.removeEventListener('keydown', this.closeWithEnter, false)
  }

  private searchRef = React.createRef<HTMLInputElement>()

  closeWithEsc = (e: any) => {
    if (e.keyCode === 27) this.props.closeSearch()
  }

  closeWithEnter = (e: any) => {
    if (
      document.activeElement &&
      document.activeElement.id === 'ExitButton' &&
      e.keyCode === 13
    ) {
      this.props.closeSearch()
    }
  }

  onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (this.searchRef.current && this.searchRef.current.value.length) {
      this.props.closeSearch()
      if (typeof window !== 'undefined') {
        // window.location.href = `/search/${this.searchRef.current ? this.searchRef.current.value : ''}`
        // using window.location.href actually reloads the page - using props.history.push just uses react-router so we don't have to fetch our entire app data again
        this.props.history.push(
          `/search/${
            this.searchRef.current ? this.searchRef.current.value : ''
          }`
        )
      }
    }
  }

  render() {
    return (
      <StyledTakeover>
        <Exit onClick={this.props.closeSearch} id="ExitButton" />

        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-sm-10 mb-4">
                <input
                  className="form-control form-control-lg Search__input px-3"
                  type="text"
                  name="s"
                  ref={this.searchRef}
                  placeholder="Type to search..."
                />
              </div>
              <div className="col-sm-2">
                <button type="submit" className="btn btn-light btn-lg">
                  <FontAwesomeIcon icon="search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </StyledTakeover>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeSearch: () => closeSearch()(dispatch)
})

export default withRouter(connect(
  null,
  mapDispatchToProps
)(SearchTakeover) as any)
