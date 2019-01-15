import React from 'react'
import styled from '../../styled-components'

const StyledH3 = styled('h3')<{ fs?: number }>`
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 100;
  font-size: ${props => (props.fs ? props.fs + 'px' : '1.75rem')};
`

interface Props {
  fs?: number
}

const H3: React.SFC<Props> = props => (
  <StyledH3 fs={props.fs}>{props.children}</StyledH3>
)

export default H3
