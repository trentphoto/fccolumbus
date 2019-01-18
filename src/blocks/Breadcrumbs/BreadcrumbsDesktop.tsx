import React from 'react'
import styled from '../../styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Divider = styled.div`
  padding: 1rem;
`

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

const BreadcrumbsDesktop = (props: Props) => (
  <StyledBreadcrumbSection>
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to={'/'}>
            <FontAwesomeIcon icon="home" />
          </Link>
          <Divider>
            <FontAwesomeIcon icon="chevron-right" />
          </Divider>
          <Link to={props.parent ? '/' + props.parent.slug : ''}>
            {props.parent && props.parent.title.rendered}
          </Link>
          <Divider>
            <FontAwesomeIcon icon="chevron-right" />
          </Divider>
          <div className="p-3">{props.page && props.page.title.rendered}</div>
        </div>
      </div>
    </div>
  </StyledBreadcrumbSection>
)

export default BreadcrumbsDesktop
