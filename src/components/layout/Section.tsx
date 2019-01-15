import React from 'react'
import styled from '../../styled-components'

interface Props {
  bg?: 'lightgray' | 'white' | 'red' | 'dark'
}

const StyledSection = styled('section')<Props>`
  padding: 3rem 0;
  background-color: ${props =>
    props.bg ? props.theme[props.bg] : props.theme.white};
  color: ${props =>
    props.bg
      ? props.bg === 'red' || props.bg === 'dark'
        ? 'white'
        : 'black'
      : 'black'};
`

const Section: React.SFC<Props> = props => (
  <StyledSection bg={props.bg}>{props.children}</StyledSection>
)

export default Section
