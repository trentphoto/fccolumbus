import React from 'react'
import styled from '../../styled-components'
import bgImg from '../../img/fcc-103.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import NavButton from './NavButton'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { openSearch, openMenu } from '../../modules/ducks/layout/operations'

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center center;
  position: relative;
  padding: 3rem;

  @media (min-width: 790px) {
    flex-direction: row;
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: ${props => props.theme.redDark};
    opacity: 0.9;
  }

  & > * {
    z-index: 1;
    position: relative;
  }
`

const Lockup = styled.div`
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 3px;
  text-align: left;
  margin-bottom: 2rem;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 790px) {
    flex-direction: row;
  }
`

interface Props {
  openSearch: () => any
  openMenu: () => any
}

class Navbar extends React.Component<Props> {
  private SearchNavButtonRef = React.createRef<NavButton>()
  private MenuNavButtonRef = React.createRef<NavButton>()

  componentDidMount() {
    document.addEventListener('keydown', this.openMenuWithEnter, false)
    document.addEventListener('keydown', this.openSearchWithEnter, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.openMenuWithEnter, false)
    document.removeEventListener('keydown', this.openSearchWithEnter, false)
  }

  openMenuWithEnter = (e: any) => {
    if (
      this.MenuNavButtonRef.current &&
      document.activeElement && // because this and the line above could possibly be null
      this.MenuNavButtonRef.current.props.id === document.activeElement.id &&
      e.keyCode === 13
    ) {
      this.props.openMenu()
    }
  }

  openSearchWithEnter = (e: any) => {
    if (
      this.SearchNavButtonRef.current &&
      document.activeElement && // because this and the line above could possibly be null
      this.SearchNavButtonRef.current.props.id === document.activeElement.id &&
      e.keyCode === 13
    ) {
      this.props.openSearch()
    }
  }

  render() {
    return (
      <StyledNavbar>
        <Link to="/">
          <Lockup>
            First Congregational Church <br /> UCC Columbus
          </Lockup>
        </Link>
        <Buttons>
          <NavButton
            light
            onClick={this.props.openSearch}
            ref={this.SearchNavButtonRef}
            id="SearchNavButton"
          >
            <FontAwesomeIcon icon="search" className="mr-3" />
            Search
          </NavButton>

          <NavButton
            light
            onClick={this.props.openMenu}
            ref={this.MenuNavButtonRef}
            id="MenuNavButton"
          >
            <FontAwesomeIcon icon="bars" className="mr-3" />
            Menu
          </NavButton>
        </Buttons>
      </StyledNavbar>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openSearch: () => openSearch()(dispatch),
  openMenu: () => openMenu()(dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(Navbar)
