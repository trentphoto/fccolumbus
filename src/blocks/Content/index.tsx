import React from 'react'
import styled from '../../styled-components'

interface Props {
  content: string
}

const Content = styled.div`
  a {
    color: ${props => props.theme.red};
    position: relative;
    border-bottom: 3px solid ${props => props.theme.lightgray};
    font-weight: bold;
    z-index: 2;

    &:hover {
      color: ${props => props.theme.red};
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: ${props =>
          props.theme.timing.duration.fast + ' ' + props.theme.timing.curve}
        background-color;
      background-color: transparent;
      z-index: -1;
    }

    &:hover:after {
      background-color: ${props => props.theme.lightgray};
    }
  }
`

export default ({ content }: Props) => (
  <Content dangerouslySetInnerHTML={{ __html: content }} />
)
