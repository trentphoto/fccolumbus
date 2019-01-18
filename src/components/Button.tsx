import React from 'react'
import styled from '../styled-components'
import { Link } from 'react-router-dom'

interface Props {
  light?: boolean
  className?: string
  onClick?: (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => void
  children: any
  isLink?: boolean
  to?: string
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

const Button: React.SFC<Props> = ({
  onClick,
  isLink,
  to,
  light,
  className,
  children
}) => {
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
    <StyledButton light={light} className={className} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
