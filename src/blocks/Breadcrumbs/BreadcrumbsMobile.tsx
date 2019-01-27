import React from 'react'
import styled from '../../styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const StyledBreadcrumbSection = styled.section`
  background-color: ${props => props.theme.lightgray};
  padding: 1rem 0;

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
  levels: 3 | 4
  lvl2Link: string
  lvl2Label: string
  lvl3Link?: string
  lvl3Label: string
  lvl4Link?: string
  lvl4Label?: string
}

const BreadcrumbsMobile = (props: Props) => (
  <StyledBreadcrumbSection>
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to={props.lvl3Link ? props.lvl3Link : props.lvl2Link}>
            <FontAwesomeIcon icon="chevron-left" className="mr-3" />
            <span
              dangerouslySetInnerHTML={{
                __html: props.levels === 3 ? props.lvl2Label : props.lvl3Label
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  </StyledBreadcrumbSection>
)

export default BreadcrumbsMobile
