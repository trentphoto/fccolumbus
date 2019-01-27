import React from 'react'
import styled from '../../../styled-components'

interface StyledWrapperProps {
  height?: number
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  max-width: 100%;
  max-height: ${props => (props.height ? props.height + 'px' : '500px')};
  overflow: hidden;
  margin: 3rem 0;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`

interface Props {
  img: string
  alt: string
  height?: number
}

const SingleFeaturedImage = ({ img, alt, height }: Props) => (
  <StyledWrapper height={height}>
    <img src={img} alt={alt} />
  </StyledWrapper>
)

export default SingleFeaturedImage
