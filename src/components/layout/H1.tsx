import React from 'react'
import styled from '../../styled-components'

interface StyleProps {
  center?: boolean
}

const StyledH1 = styled('h1')<StyleProps>`
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 100;
  position: relative;
  text-align: ${props => (props.center ? 'center' : 'left')};

  &:after {
    content: '';
    display: block;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100px;
    margin: ${props =>
      props.center ? '10px auto 10px auto' : '10px 0 50px 0'};
    height: 2px;
    background-color: ${props => props.theme.red};
  }
`

interface Props {
  className?: string
  center?: boolean
}

const H1: React.SFC<Props> = props => (
  <StyledH1 center={props.center} className={props.className}>
    {props.children}
  </StyledH1>
)

export default H1
