import React from 'react'
import { Link } from 'react-router-dom'
import styled from '../styled-components'

interface Props {
  img: string
  title: string
  subtitle: string
  link: string
}

const Card = styled('div')<{ img: string }>`
  background-size: cover;
  background-image: url(${props => props.img});
  color: white;
  text-align: center;
  padding: 2rem;
  padding-top: 300px;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: none;

    h2 {
      transform: translateY(-10px);
    }
    p {
      transform: translateY(-2px);
    }
  }

  h2,
  p {
    position: relative;
    transition: ${props =>
        props.theme.timing.duration.fast + ' ' + props.theme.timing.curve}
      transform;
    z-index: 2;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: ${props => props.theme.red};
    opacity: 0.35;
    z-index: 1;
    transition: ${props => props.theme.timing.duration.fast}
      ${props => props.theme.timing.curve} opacity;
  }

  &:hover:after {
    opacity: 0;
  }
`

const BannerCard: React.SFC<Props> = props => (
  <Link to={props.link}>
    <Card img={props.img}>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </Card>
  </Link>
)

export default BannerCard
