import React from 'react'
import styled from '../../styled-components'
import Button from '../Button'
import bgImg from '../../img/fcc-103.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center center;
  position: relative;
  padding: 3rem;

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
`

const NavButton = styled(Button)`
  padding: 0.75rem 1rem;
  border-radius: 3px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);

  &:hover {
    color: black;
    background-color: rgba(255, 255, 255, 0.9);
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
      <NavButton light className="mr-1 mb-1">
        <FontAwesomeIcon icon="search" className="mr-3" />
        Search
      </NavButton>
      <NavButton light>
        <FontAwesomeIcon icon="bars" className="mr-3" />
        Menu
      </NavButton>
    </Buttons>
  </StyledNavbar>
)

export default Navbar
