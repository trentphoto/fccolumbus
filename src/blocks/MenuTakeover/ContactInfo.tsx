import React from 'react'
import styled from '../../styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const ContactInfoItem = styled.a`
  padding: 1rem;
  color: white;
  display: block;
  transition: ${props =>
      props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
    opacity;

  &:hover {
    color: white;
    opacity: 0.8;
  }
`

export default () => (
  <ContactInfo>
    <ContactInfoItem href="https://www.google.com/maps/place/First+Congregational+Church/@39.9642168,-82.9910669,17z/data=!4m13!1m7!3m6!1s0x883888d20a38cbd5:0x8f109d29336186ea!2s444+E+Broad+St,+Columbus,+OH+43215!3b1!8m2!3d39.9642168!4d-82.9888782!3m4!1s0x883888cdf5916e1f:0xa1e7dd4fefc08eca!8m2!3d39.9643261!4d-82.9886838">
      <FontAwesomeIcon icon="map-marker-alt" className="mr-3" />
      444 East Broad Street, Columbus, Ohio 43215
    </ContactInfoItem>
    <ContactInfoItem href="mailto:home@first-church.org">
      <FontAwesomeIcon icon="envelope" className="mr-3" />
      home@first-church.org
    </ContactInfoItem>
    <ContactInfoItem href="tel:6142281741">
      <FontAwesomeIcon icon="phone" className="mr-3" />
      614-228-1741
    </ContactInfoItem>
  </ContactInfo>
)
