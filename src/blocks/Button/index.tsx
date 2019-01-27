import React from 'react'
import styled from '../../styled-components'
import { Link } from 'react-router-dom'

export interface ButtonProps {
  light?: boolean
  className?: string
  tabIndex?: number
  onFocus?: () => any
  onBlur?: () => any
  onClick?: (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => void
  children: any
  isLink?: boolean
  to?: string
  ref?: any
  id?: string
}

const StyledButton = styled('div')<{ light?: boolean; to?: string }>`
  background-color: ${props => (props.light ? 'white' : props.theme.red)};
  color: ${props => (props.light ? 'black' : 'white')};
  padding: 20px 60px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  display: inline-block;
  transition: 300ms cubic-bezier(0.05, 0.69, 0.14, 1) background-color;

  &:hover {
    background-color: ${props =>
      props.light ? props.theme.lightgray : props.theme.redDark};
    color: ${props => (props.light ? props.theme.dark : props.theme.white)};
  }
`

class Button extends React.Component<ButtonProps> {
  render() {
    const {
      onClick,
      isLink,
      to,
      light,
      className,
      tabIndex,
      onFocus,
      onBlur,
      children
    } = this.props

    if (isLink) {
      return (
        <StyledButton
          as={Link}
          to={to}
          light={light}
          className={className}
          onClick={onClick}
        >
          {children}
        </StyledButton>
      )
    }

    // else if it's not a link button
    return (
      <StyledButton
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={tabIndex}
        light={light}
        className={className}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    )
  }
}

export default Button
