import React from 'react'
import Exit from './Exit'
import ContactInfo from './ContactInfo'
import ResponsiveMenu from '../../utils/ResponsiveHOC'
import TakeoverListDesktop from './TakeoverListDesktop'
import TakeoverListMobile from './TakeoverListMobile'
import StyledTakeover from './StyledTakeover'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { closeMenu } from '../../modules/ducks/layout/operations'

interface Props {
  closeMenu: () => any
}

class MenuTakeover extends React.Component<Props> {
  componentDidMount() {
    document.addEventListener('keydown', this.closeWithEsc, false)
    document.addEventListener('keydown', this.closeWithEnter, false)
    const a = document.getElementById('ExitButton')
    a && a.focus() // if #ExitButton exists, focus it
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeWithEsc, false)
    document.removeEventListener('keydown', this.closeWithEnter, false)
  }

  closeWithEsc = (e: any) => {
    if (e.keyCode === 27) this.props.closeMenu()
  }

  closeWithEnter = (e: any) => {
    if (
      document.activeElement &&
      document.activeElement.id === 'ExitButton' &&
      e.keyCode === 13
    ) {
      this.props.closeMenu()
    }
  }

  render() {
    return (
      <StyledTakeover>
        <Exit onClick={this.props.closeMenu} id="ExitButton" />

        <div className="container">
          <div className="row">
            <div className="col">
              <ResponsiveMenu
                ifBelow={() => (
                  <TakeoverListMobile onChange={this.props.closeMenu} />
                )}
                ifAbove={() => (
                  <TakeoverListDesktop onChange={this.props.closeMenu} />
                )}
                breakpoint={1199}
              />
              <ContactInfo />
            </div>
          </div>
        </div>
      </StyledTakeover>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeMenu: () => closeMenu()(dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(MenuTakeover)
