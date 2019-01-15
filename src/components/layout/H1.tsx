import React from 'react'
import styled from '../../styled-components'

const StyledH1 = styled('h1')`
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 100;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: relative;
    bottom: 0;
    left: 0;
    width: 50px;
    margin: 10px 0 50px 0;
    height: 2px;
    background-color: ${props => props.theme.red};
  }
`

interface Props {
  className?: string
}

const H1: React.SFC<Props> = props => (
  <StyledH1 className={props.className}>{props.children}</StyledH1>
)

export default H1
