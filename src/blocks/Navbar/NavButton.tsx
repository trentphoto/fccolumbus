import React from 'react'
import styled from '../../styled-components'
// import { Button } from '../../blocks'
import { ButtonProps } from '../Button'

const StyledNavButton = styled.div`
  /* styles from Button */
  border: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  transition: 300ms cubic-bezier(0.05, 0.69, 0.14, 1) background-color;

  padding: 0.75rem 1rem;
  margin: 0 0 0.5rem 0;
  border-radius: 3px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    color: black;
    background-color: rgba(255, 255, 255, 0.9);
    outline: none;
  }

  @media (min-width: 790px) {
    margin: 0 0.5rem 0 0;
  }
`

export default class NavButton extends React.Component<ButtonProps> {
  render() {
    return (
      <StyledNavButton tabIndex={0} {...this.props}>
        {this.props.children}
      </StyledNavButton>
    )
  }
}
