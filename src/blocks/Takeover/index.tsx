import React from 'react'
import NavButton from '../../blocks/Navbar/NavButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '../../styled-components'

import Exit from './Exit'
import ContactInfo from './ContactInfo'
import ResponsiveMenu from '../../utils/ResponsiveHOC'
import TakeoverListDesktop from './TakeoverListDesktop'
import TakeoverListMobile from './TakeoverListMobile'

interface TakeoverProps {
  open: boolean
}

const StyledTakeover = styled.div<TakeoverProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: ${props => (props.open ? 'flex' : 'none')};
  align-items: center;
  z-index: 500;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.redDark};
    opacity: 0.98;
    z-index: -1;
  }
`

class Takeover extends React.Component {
  state = {
    open: false
  }
  toggle = () => {
    this.setState((prevState: TakeoverProps) => ({ open: !prevState.open }))
  }
  render() {
    return (
      <>
        <NavButton light onClick={this.toggle}>
          <FontAwesomeIcon icon="bars" className="mr-3" />
          Menu
        </NavButton>

        <StyledTakeover open={this.state.open}>
          <Exit onClick={this.toggle} />

          <div className="container">
            <div className="row">
              <div className="col">
                <ResponsiveMenu
                  ifBelow={() => <TakeoverListMobile onChange={this.toggle} />}
                  ifAbove={() => <TakeoverListDesktop onChange={this.toggle} />}
                  breakpoint={1199}
                />
                <ContactInfo />
              </div>
            </div>
          </div>
        </StyledTakeover>
      </>
    )
  }
}

export default Takeover
