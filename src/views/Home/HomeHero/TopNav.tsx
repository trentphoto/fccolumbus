import React from 'react'
import styled from '../../../styled-components'
import Menu from '../../../metadata/menu'
import { NavLink } from 'react-router-dom'

const StyledTopnav = styled.div``

const StyledTopnavItem = styled.div`
  position: relative;
  transition: ${props =>
      props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
    all;

  > a {
    display: block;
    padding: 0 1rem;
    width: 100%;
    height: 30px;
    color: #fff;
    transition: ${props =>
        props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
      all;
    &:hover {
      color: white;
    }
  }

  &:hover {
    color: white;
  }

  &:hover .SubNav {
    display: block;
    visibility: visible;
    transform: translateY(-20px);
    opacity: 1;
    transition-delay: 30ms;
  }

  &:hover > a {
    transform: translateY(-3px);
    opacity: 0.9;
  }
`

const SubNav = styled.ul`
  visibility: hidden;
  position: absolute;
  top: 50px;
  left: 0;
  padding: 1rem 0;
  background-color: ${props => props.theme.red};
  list-style-type: none;
  min-width: 200px;
  z-index: 50;
  opacity: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: ${props =>
      props.theme.timing.duration.fast + ' ' + props.theme.timing.curve}
    all;

  li {
    display: block;

    a {
      display: block;
      padding: 0.75rem 1rem;
      color: white;
      transition: ${props =>
          props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
        all;

      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
      }
    }
  }
`

const TopNav = () => (
  <StyledTopnav className="nav d-none d-xl-flex">
    {Menu.map(i => (
      <StyledTopnavItem key={i.slug}>
        <NavLink to={i.slug}>{i.title}</NavLink>
        {i.subpages && (
          <SubNav className="SubNav">
            {i.subpages.map(sub => (
              <li key={sub.slug}>
                <NavLink to={`/${i.slug}/${sub.slug}`}>{sub.title}</NavLink>
              </li>
            ))}
          </SubNav>
        )}
      </StyledTopnavItem>
    ))}
  </StyledTopnav>
)

export default TopNav
