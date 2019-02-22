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
    padding: 3px 0 1px 0;
    transition: ${props =>
        props.theme.timing.duration.fast + ' ' + props.theme.timing.curve}
      background-color;
    z-index: 2;

    &:hover {
      color: ${props => props.theme.red};
      background-color: ${props => props.theme.lightgray};
    }
  }
`

export default ({ content }: Props) => (
  <Content dangerouslySetInnerHTML={{ __html: content }} />
)
