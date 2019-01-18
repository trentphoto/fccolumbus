import React from 'react'
import styled from '../../styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const StyledBreadcrumbSection = styled.section`
  background-color: ${props => props.theme.lightgray};

  .col {
    display: flex;

    a {
      padding: 1rem;
      color: ${props => props.theme.dark};
      transition: ${props =>
          props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
        background-color;

      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
`

interface Props {
  parentID: number
  parent?: WPPage
  page?: WPPage
}

const BreadcrumbsMobile = (props: Props) => (
  <StyledBreadcrumbSection>
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to={props.parent ? '/' + props.parent.slug : ''}>
            <FontAwesomeIcon icon="chevron-left" className="mr-3" />
            {props.parent && props.parent.title.rendered}
          </Link>
        </div>
      </div>
    </div>
  </StyledBreadcrumbSection>
)

export default BreadcrumbsMobile
