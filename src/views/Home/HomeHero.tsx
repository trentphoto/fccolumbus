import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '../../styled-components'
import Button from '../../components/Button'

import imgHero from '../../img/fcc-41.jpg'

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

  a {
    color: #fff;
  }
`

const Nav = styled('div')`
  padding-top: 2rem;
`

const Title = styled('h1')`
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 0 30px rgba(0, 0, 0, 1);
  margin-bottom: 2rem;
`

export default class HomeHero extends React.Component {
  render() {
    return (
      <HeroSection>
        <Nav className="container">
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div className="logo">First Church Columbus</div>
              <ul className="nav d-none d-xl-flex">
                <li className="nav-item mx-2">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="/connect">Connect</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="/gather">Gather</NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink to="/grow">Grow</NavLink>
                </li>
              </ul>
              <div className="icons d-flex">
                <span className="mx-3">
                  <FontAwesomeIcon icon="search" size="lg" />
                </span>
                <span className="mx-3">
                  <FontAwesomeIcon icon="bars" size="lg" />
                </span>
              </div>
            </div>
          </div>
        </Nav>

        <div className="middle">
          <Title>Lorem Ipsum Dolor</Title>
          <div className="buttons">
            <Link to="/connect" className="mr-4">
              <Button>I'm New</Button>
            </Link>
            <Link to="/news" className="">
              <Button light={true}>Sermons</Button>
            </Link>
          </div>
        </div>
      </HeroSection>
    )
  }
}
