import React from 'react'
import styled from '../../styled-components'

const StyledH4 = styled('h4')<{ fs?: number }>`
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 100;
  font-size: ${props => (props.fs ? props.fs + 'px' : '1.25rem')};
`

interface Props {
  fs?: number
}

const H4: React.SFC<Props> = props => (
  <StyledH4 fs={props.fs}>{props.children}</StyledH4>
)

export default H4
