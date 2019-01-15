import React from 'react'
import styled from '../../styled-components'
import { siteBase, urlBase } from '../../config'
import { Link } from 'react-router-dom'

const StyledGrid = styled.section`
  display: grid;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

interface IStyledGridItem {
  bg: string
}

const StyledGridItem = styled.div<IStyledGridItem>`
    position: relative;
    padding: 5rem 0;
    text-align: center;
    background-image: url(${props => props.bg});
    background-position: center center;
    background-size: cover;
    color: white;
    border: 3px solid ${props => props.theme.dark}
    

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme.red};
        opacity: .8;
        transition: ${props =>
          props.theme.timing.duration.slow +
          ' ' +
          props.theme.timing.curve} opacity;
        z-index: 2;
    }

    &:hover {

    }

    &:hover:after {
        opacity: .5;
    }

    h2 {
        z-index: 3;
        position: relative;
    }
`

interface Props {
  subpages: WPPage[]
}

const Grid: React.SFC<Props> = props => (
  <StyledGrid>
    {props.subpages.map(i => {
      const bg = i._embedded['wp:featuredmedia']
        ? urlBase + i._embedded['wp:featuredmedia'][0].source_url
        : `${siteBase}/app/uploads/2019/01/fcc-41.jpg`
      return (
        <Link to={`/${i.slug}`}>
          <StyledGridItem bg={bg}>
            <h2>{i.title.rendered}</h2>
          </StyledGridItem>
        </Link>
      )
    })}
  </StyledGrid>
)

export default Grid
