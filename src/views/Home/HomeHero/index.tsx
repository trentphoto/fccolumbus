import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '../../../styled-components'
import Button from '../../../components/Button'

import imgHero from '../../../img/fcc-41.jpg'
import TopNav from './TopNav'

const HeroSection = styled('section')`
  display: block;
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url(${imgHero});
  background-size: cover;
  background-position: center center;
  color: white;
  text-transform: uppercase;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.red};
    opacity: 0.25;
  }

  .middle {
    margin: 0 auto;
    margin-top: 200px;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  a {
    color: #fff;
  }
`

const Title = styled('h1')`
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 0 30px rgba(0, 0, 0, 1);
  margin-bottom: 2rem;
`

export default class HomeHero extends React.Component {
  render() {
    return (
      <HeroSection>
        <div className="container pt-4">
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div className="logo">First Church Columbus</div>
              <TopNav />
              <div className="icons d-flex">
                <span className="mx-3">
                  <FontAwesomeIcon icon="search" size="lg" />
                </span>
                <span className="mx-3">
                  <FontAwesomeIcon icon="bars" size="lg" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="middle">
          <Title>Welcome to First Church.</Title>
          <div className="buttons">
            <Button isLink to="/about/welcome" className="mr-4">
              I'm New
            </Button>
            <Button light onClick={() => console.log(1)}>
              Sermons
            </Button>
          </div>
        </div>
      </HeroSection>
    )
  }
}
