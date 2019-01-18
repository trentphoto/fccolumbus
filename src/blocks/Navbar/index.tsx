import React from 'react'
import styled from '../../styled-components'
import bgImg from '../../img/fcc-103.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Takeover from '../../blocks/Takeover'
import NavButton from './NavButton'

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
    z-index: 1;
  }

  & > * {
    z-index: 500;
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

const Navbar: React.SFC = () => (
  <StyledNavbar>
    <Link to="/">
      <Lockup>
        First Congregational Church <br /> UCC Columbus
      </Lockup>
    </Link>
    <Buttons>
      <NavButton light className="">
        <FontAwesomeIcon icon="search" className="mr-3" />
        Search
      </NavButton>

      <Takeover />
    </Buttons>
  </StyledNavbar>
)

export default Navbar
