import React from 'react'
import styled from '../../styled-components'

import { Section } from '../../blocks'
import H2center from '../../components/layout/H2center'
import { siteBase } from '../../config'

const StyledGallery = styled.div`
  img {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-gap: 10px;
    grid-template-rows: repeat(2);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);

    img:first-child {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
      height: 100%;
      object-fit: cover;
    }
  }
`

const Gallery: React.SFC = () => (
  <Section>
    <div className="container">
      <div className="row">
        <div className="col">
          <H2center>Gallery</H2center>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <StyledGallery>
            <img
              src={`${siteBase}/app/uploads/2019/01/fcc-53.jpg`}
              alt="First Church Columbus"
              className="img-fluid"
            />
            <img
              src={`${siteBase}/app/uploads/2019/01/fcc-5.jpg`}
              alt="First Church Columbus"
              className="img-fluid"
            />
            <img
              src={`${siteBase}/app/uploads/2019/01/fcc-46.jpg`}
              alt="First Church Columbus"
              className="img-fluid"
            />
            <img
              src={`${siteBase}/app/uploads/2019/01/fcc-104.jpg`}
              alt="First Church Columbus"
              className="img-fluid"
            />
            <img
              src={`${siteBase}/app/uploads/2019/01/fcc-13.jpg`}
              alt="First Church Columbus"
              className="img-fluid"
            />
          </StyledGallery>
        </div>
      </div>
    </div>
  </Section>
)

export default Gallery
