import React from 'react'
import styled from '../../styled-components'

const StyledH2 = styled('h2')`
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 100;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: relative;
    bottom: 0;
    width: 150px;
    margin: 10px auto 50px auto;
    height: 1px;
    background-color: ${props => props.theme.dark};
  }
`

interface Props {
  className?: string
}

const H2center: React.SFC<Props> = props => (
  <StyledH2 className={props.className}>{props.children}</StyledH2>
)

export default H2center
