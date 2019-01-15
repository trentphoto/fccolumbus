import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '../../styled-components'
import H3 from './H3'
import bgImg from '../../img/fcc-103.jpg'
import H4 from './H4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledFooter = styled('footer')`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center center;
  position: relative;
  padding: 5rem 0 0 0;

  a,
  a:hover,
  h4,
  p {
    color: ${props => props.theme.white};
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
    z-index: 1;
  }

  & > * {
    z-index: 2;
    position: relative;
  }
`

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    padding: 7px 0;
    display: block;
    opacity: 1;
    transition: ${props =>
        props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
      opacity;

    &:hover {
      opacity: 0.8;
    }
  }
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);

  p {
    margin-bottom: 0;
    opacity: 0.8;
    text-align: center;
  }

  a {
    border-bottom: 2px solid white;
    padding-bottom: 2px;
  }
`

const Footer: React.SFC = () => (
  <React.Fragment>
    <StyledFooter>
      <div className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-left text-white">
              <H3>
                First Church <br />
                of Columbus
              </H3>
              <LinkList>
                <a href="google.com" className="mt-3 d-flex align-items-center">
                  <FontAwesomeIcon
                    icon="map-marker-alt"
                    size="2x"
                    className="mr-3"
                  />
                  <span>123 Street Address, Columbus, OH 11111</span>
                </a>
                <a href="google.com" className="mt-3 d-flex align-items-center">
                  <FontAwesomeIcon icon="phone" size="2x" className="mr-3" />
                  <span>123-123-1231</span>
                </a>
                <a href="google.com" className="mt-3 d-flex align-items-center">
                  <FontAwesomeIcon icon="envelope" size="2x" className="mr-3" />
                  <span>email@first-church.org</span>
                </a>
              </LinkList>
            </div>
            <div className="col-md-3 mt-5">
              <H4>Explore</H4>
              <LinkList>
                <NavLink exact to="/">
                  Home
                </NavLink>
                <NavLink to="/about">Connect</NavLink>
                <NavLink to="/episodes">Gather</NavLink>
                <NavLink to="/grow">Grow</NavLink>
                <NavLink to="/act">Act</NavLink>
              </LinkList>
            </div>
            <div className="col-md-3 mt-5">
              <H4>Discover</H4>
              <LinkList>
                <NavLink exact to="/">
                  More
                </NavLink>
                <NavLink to="/about">Links</NavLink>
                <NavLink to="/episodes">Here</NavLink>
                <NavLink to="/grow">Grow</NavLink>
                <NavLink to="/act">Act</NavLink>
              </LinkList>
            </div>

            <div className="col-md-3 mt-5">
              <H4>Worship Times</H4>
              <p>9:00 AM</p>
              <p>Informal worship with Communion in Parish Hall</p>
              <br />
              <p>11:00 AM</p>
              <p>
                Traditional worship, in the Sanctuary, with choirs and organs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Copyright>
        <p>
          &copy; 2018 First Church of Columbus.{' '}
          <a className="text-white" href="https://brightsaltmedia.com">
            Web design for churches
          </a>{' '}
          by Bright Salt Media Labs.
        </p>
      </Copyright>
    </StyledFooter>
  </React.Fragment>
)

export default Footer
