import React from 'react'
import styled from '../../../styled-components'
import Menu from '../../../metadata/menu'
import { NavLink } from 'react-router-dom'

const StyledTopnav = styled.div``

const StyledTopnavItem = styled(NavLink)`
  margin: 0 1rem;
  padding: 0 0 1rem 0;
  position: relative;
  transition: ${props =>
      props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
    all;

  span {
    display: block;
    transition: ${props =>
        props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
      all;
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

  &:hover span {
    transform: translateY(-3px);
    opacity: 0.9;
  }
`

const SubNav = styled.ul`
  visibility: hidden;
  position: absolute;
  top: 50px;
  left: 0;
  background-color: ${props => props.theme.red};
  color: white;
  padding: 1rem;
  list-style-type: none;
  min-width: 200px;
  z-index: 50;
  opacity: 0;
  transition: ${props =>
      props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
    all;

  li {
    display: block;

    a {
      display: block;
      padding: 0.5rem 0;
      transition: ${props =>
          props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
        all;

      &:hover {
        opacity: 0.7;
        color: white;
      }
    }
  }
`

interface ITopNav {}

const TopNav = (props: ITopNav) => (
  <StyledTopnav className="nav d-none d-xl-flex">
    {Menu.map(i => (
      <StyledTopnavItem key={i.slug} to={i.slug}>
        <span>{i.title}</span>
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
