import React from 'react'
import styled from '../../styled-components'
import { siteBase } from '../../config'
import { Link } from 'react-router-dom'

const StyledGrid = styled.section`
  display: grid;
  grid-gap: 5px;
  background-color: ${props => props.theme.dark};
  padding: 5px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

interface IStyledGridItem {
  bg: string
}

const StyledGridItem = styled.div<IStyledGridItem>`
  position: relative;
  padding: 7rem 0;
  text-align: center;
  background-image: url(${props => props.bg});
  background-position: center center;
  background-size: cover;
  color: white;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.red};
    opacity: 0.8;
    transition: ${props =>
        props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
      opacity;
    z-index: 2;
  }

  &:hover,
  &:focus {
    outline: none;
  }

  &:hover:after,
  &:focus:after {
    opacity: 0.5;
  }

  h2 {
    z-index: 3;
    position: relative;
  }
`

interface Props {
  subpages: ProcessedPage[]
  baseURL: string
}

const Grid: React.SFC<Props> = props => (
  <StyledGrid>
    {props.subpages.map(i => {
      const bg = i.img ? i.img : `${siteBase}/app/uploads/2019/01/fcc-41.jpg`
      return (
        <Link key={i.id} to={`${props.baseURL}/${i.slug}`}>
          <StyledGridItem bg={bg}>
            <h2 dangerouslySetInnerHTML={{ __html: i.title }} />
          </StyledGridItem>
        </Link>
      )
    })}
  </StyledGrid>
)

export default Grid
