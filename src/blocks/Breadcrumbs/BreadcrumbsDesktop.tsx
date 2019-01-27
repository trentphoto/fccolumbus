import React from 'react'
import styled from '../../styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Divider = styled.div`
  padding: 1rem;
`

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

const BreadcrumbsDesktop = (props: Props) => (
  <StyledBreadcrumbSection>
    <div className="container">
      <div className="row">
        <div className="col">
          {/* level 1: Home */}
          <Link to={'/'}>
            <FontAwesomeIcon icon="home" />
          </Link>
          <Divider>
            <FontAwesomeIcon icon="chevron-right" />
          </Divider>

          {/* Level 2 */}
          <Link to={props.lvl2Link}>{props.lvl2Label}</Link>
          <Divider>
            <FontAwesomeIcon icon="chevron-right" />
          </Divider>

          {/* level 3 */}
          {props.levels === 3 ? (
            <div className="p-3">{props.lvl3Label}</div>
          ) : (
            <>
              <Link to={props.lvl3Link ? props.lvl3Link : ''}>
                <span dangerouslySetInnerHTML={{ __html: props.lvl3Label }} />
              </Link>
              <Divider>
                <FontAwesomeIcon icon="chevron-right" />
              </Divider>

              {/* level 4 */}
              <div
                className="p-3"
                dangerouslySetInnerHTML={{
                  __html: props.lvl4Label ? props.lvl4Label : ''
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  </StyledBreadcrumbSection>
)

export default BreadcrumbsDesktop
