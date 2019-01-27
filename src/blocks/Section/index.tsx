import React from 'react'
import styled from '../../styled-components'

interface Props {
  bg?: 'lightgray' | 'white' | 'red' | 'dark'
  bgImg?: string
  padding?: string
  center?: boolean
  className?: string
}

const StyledSection = styled('section')<Props>`
  padding: ${props => (props.padding ? props.padding : '3rem 0')};
  background-image: ${props => (props.bgImg ? `url(${props.bgImg})` : 'none')};
  background-size: cover;
  background-position: center center;
  background-color: ${props =>
    props.bg ? props.theme[props.bg] : props.theme.white};
  color: ${props =>
    props.bg
      ? props.bg === 'red' || props.bg === 'dark'
        ? 'white'
        : 'black'
      : props.bgImg
      ? 'white'
      : 'black'};
  text-align: ${props => (props.center ? 'center' : 'left')};
`

const Section: React.SFC<Props> = props => (
  <StyledSection
    className={props.className}
    padding={props.padding}
    bgImg={props.bgImg}
    bg={props.bg}
  >
    {props.children}
  </StyledSection>
)

export default Section
