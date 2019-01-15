import React from 'react'
import styled from '../styled-components'

interface Props {
  light?: boolean
  className?: string
}

const StyledButton = styled('button')<{ light?: boolean }>`
  background-color: ${props => (props.light ? 'white' : props.theme.red)};
  color: ${props => (props.light ? 'black' : 'white')};
  padding: 20px 60px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  transition: 300ms cubic-bezier(0.05, 0.69, 0.14, 1) background-color;

  &:hover {
    background-color: ${props =>
      props.light ? props.theme.lightgray : props.theme.redDark};
  }
`

const Button: React.SFC<Props> = props => (
  <StyledButton light={props.light} className={props.className}>
    {props.children}
  </StyledButton>
)

export default Button
