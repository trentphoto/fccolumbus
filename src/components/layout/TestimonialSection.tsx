import React from 'react'
import styled from '../../styled-components'
import bg from '../../img/fcc-89.jpg'

const StyledTestimonialSection = styled.section`
  padding: 7rem;
  background-image: url(${bg});
  background-size: cover;
  background-position: center center;
  color: ${props => props.theme.white};
  letter-spacing: 2px;
  text-align: center;
`

interface Props {
  text: string
}

const TestimonialSection: React.SFC<Props> = props => (
  <StyledTestimonialSection>
    <p>{props.text}</p>
  </StyledTestimonialSection>
)

export default TestimonialSection
