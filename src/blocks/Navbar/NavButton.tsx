import React from 'react'
import styled from '../../styled-components'
import Button from '../../components/Button'

const StyledNavButton = styled(Button)`
  padding: 0.75rem 1rem;
  margin: 0 0 0.5rem 0;
  border-radius: 3px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    color: black;
    background-color: rgba(255, 255, 255, 0.9);
    outline: none;
  }

  @media (min-width: 790px) {
    margin: 0 0.5rem 0 0;
  }
`

export default (props: any) => (
  <StyledNavButton {...props}>{props.children}</StyledNavButton>
)
