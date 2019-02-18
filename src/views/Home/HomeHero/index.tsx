import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '../../../styled-components'

import { Button } from '../../../blocks'
import TopNav from './TopNav'

import imgHero from '../../../img/fcc-41.jpg'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { openMenu, openSearch } from '../../../modules/ducks/layout/operations'
import NavButton from '../../../blocks/Navbar/NavButton'
import { Link } from 'react-router-dom'

const HeroSection = styled('section')`
  display: block;
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url(${imgHero});
  background-size: cover;
  background-position: center center;
  color: white;
  text-transform: uppercase;

  @media (max-width: 440px) {
    height: 650px;
    .buttons a {
      margin: 0 1.5rem 0.5rem 1.5rem;
    }
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.red};
    opacity: 0.25;
  }

  .middle {
    margin: 0 auto;
    margin-top: 200px;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1199px) {
    .icons {
      margin-left: auto;
    }
  }

  @media (min-width: 1200px) {
    .icons .label {
      display: none;
    }
  }

  @media (max-width: 430px) {
    .icons .label {
      display: none;
    }
  }
`

const Title = styled('h1')`
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 0 30px rgba(0, 0, 0, 1);
  margin-bottom: 2rem;
  word-break: break-word;
`

interface Props {
  openMenu: () => any
  openSearch: () => any
}

class HomeHero extends React.Component<Props> {
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
      document.activeElement &&
      this.MenuNavButtonRef.current.props.id === document.activeElement.id &&
      e.keyCode === 13
    ) {
      this.props.openMenu()
    }
  }

  openSearchWithEnter = (e: any) => {
    if (
      this.SearchNavButtonRef.current &&
      document.activeElement &&
      this.SearchNavButtonRef.current.props.id === document.activeElement.id &&
      e.keyCode === 13
    ) {
      this.props.openSearch()
    }
  }

  render() {
    return (
      <HeroSection>
        <div className="container pt-4">
          <div className="row">
            <div className="col d-flex justify-content-between align-items-center">
              {/* <div className="logo">First Congregational UCC</div> */}

              <TopNav />

              <div className="icons d-flex">
                <NavButton light isLink as={Link} to="/give" className="mr-2">
                  <FontAwesomeIcon icon="gift" size="lg" />
                  <span className="label ml-2">Give</span>
                </NavButton>
                <NavButton
                  light
                  onClick={this.props.openSearch}
                  ref={this.SearchNavButtonRef}
                  id="SearchNavButton"
                  className="mr-2"
                >
                  <FontAwesomeIcon icon="search" size="lg" />
                  <span className="label ml-2">Search</span>
                </NavButton>
                <NavButton
                  light
                  onClick={this.props.openMenu}
                  ref={this.MenuNavButtonRef}
                  id="MenuNavButton"
                >
                  <FontAwesomeIcon icon="bars" size="lg" />
                  <span className="label ml-2">Menu</span>
                </NavButton>
              </div>
            </div>
          </div>
        </div>

        <div className="middle">
          <Title>Welcome to First Congregational UCC</Title>
          <div className="buttons">
            <Button isLink to="/about/welcome" className="mr-4">
              I'm New
            </Button>
            <Button light isLink to="/gather/worship">
              Worship
            </Button>
          </div>
        </div>
      </HeroSection>
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
)(HomeHero)
