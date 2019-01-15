import React from 'react'
import styled from '../../styled-components'

import img1 from '../../img/fcc-41.jpg'

import Section from '../../components/layout/Section'
import H2center from '../../components/layout/H2center'

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
            <img src={img1} alt="First Church Columbus" className="img-fluid" />
            <img src={img1} alt="First Church Columbus" className="img-fluid" />
            <img src={img1} alt="First Church Columbus" className="img-fluid" />
            <img src={img1} alt="First Church Columbus" className="img-fluid" />
            <img src={img1} alt="First Church Columbus" className="img-fluid" />
          </StyledGallery>
        </div>
      </div>
    </div>
  </Section>
)

export default Gallery
