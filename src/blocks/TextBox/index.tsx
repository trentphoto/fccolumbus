import React from 'react'
import styled from '../../styled-components'

const StyledTexBox = styled('div')`
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};
  padding: 3rem;
`

const TextBox: React.SFC = props => (
  <StyledTexBox className="TextBox">{props.children}</StyledTexBox>
)

export default TextBox
