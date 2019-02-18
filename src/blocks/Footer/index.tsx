import React from 'react'
import { NavLink } from 'react-router-dom'
import H3 from '../../components/layout/H3'
import H4 from '../../components/layout/H4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { StyledFooter, LinkList, Copyright } from './styles'

const Footer: React.SFC = () => (
  <React.Fragment>
    <StyledFooter>
      <div className="d-flex align-items-center text-white">
        <div className="container">
          <div className="row w-100">
            <div className="col w-100 py-3">
              <H3>First Congregational UCC</H3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 text-left">
              <LinkList>
                <a
                  href="https://goo.gl/maps/zHiAdqXToY92"
                  className="mt-3 d-flex align-items-center"
                >
                  <FontAwesomeIcon
                    icon="map-marker-alt"
                    size="2x"
                    className="mr-3"
                  />
                  <span>444 East Broad Street, Columbus, OH 43215</span>
                </a>
                <a
                  href="tel:6142281741"
                  className="mt-3 d-flex align-items-center"
                >
                  <FontAwesomeIcon icon="phone" size="2x" className="mr-3" />
                  <span>614-228-1741</span>
                </a>
                <a
                  href="mailto:home@first-church.org"
                  className="mt-3 d-flex align-items-center"
                >
                  <FontAwesomeIcon icon="envelope" size="2x" className="mr-3" />
                  <span>home@first-church.org</span>
                </a>
              </LinkList>
            </div>

            <div className="col-lg-3 col-md-6">
              <H4>About</H4>
              <LinkList>
                <NavLink to="/about/welcome">Welcome</NavLink>
                <NavLink to="/about/who-we-are">Who We Are</NavLink>
                <NavLink to="/about/what-we-believe">What We Believe</NavLink>
                <NavLink to="/about/what-to-expect">What to Expect</NavLink>
                <NavLink to="/about/our-stories">Our Stories</NavLink>
                <NavLink to="/about/staff">Staff</NavLink>
              </LinkList>
            </div>

            <div className="col-lg-3 col-md-6">
              <H4>Explore</H4>
              <LinkList>
                <NavLink to="/connect">Connect</NavLink>
                <NavLink to="/gather">Gather</NavLink>
                <NavLink to="/grow">Grow</NavLink>
                <NavLink to="/serve">Serve</NavLink>
                <NavLink to="/lead">Lead</NavLink>
                <NavLink to="/give">Give</NavLink>
              </LinkList>
            </div>

            <div className="col-lg-3 col-md-6">
              <H4>Worship Times</H4>
              <p className="font-weight-bold mb-0">9:00 AM</p>
              <p>Morning Prayer with Holy Communion in Parish Hall</p>
              <br />
              <p className="font-weight-bold mb-0">11:00 AM</p>
              <p>Sanctuary Service</p>
              <br />
              <p className="font-weight-bold mb-0">4:00 PM</p>
              <p>Choral Evensong (Third Sundays in Sanctuary as advertised)</p>
            </div>
          </div>
        </div>
      </div>
      <Copyright>
        <p>
          &copy; {new Date().getFullYear()} First Church of Columbus.{' '}
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
