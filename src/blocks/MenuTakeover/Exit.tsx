import React from 'react'
import NavButton from '../../blocks/Navbar/NavButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '../../styled-components'

export const StyledExit = styled(props => <NavButton {...props} />)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 5;
  & > * {
    width: 100%;
  }
`

interface Props {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
  id?: string
}

class Exit extends React.Component<Props> {
  render() {
    const { onClick, id } = this.props
    return (
      <StyledExit light onClick={onClick} tabIndex={0} id={id}>
        <FontAwesomeIcon icon="times" size="2x" />
      </StyledExit>
    )
  }
}

export default Exit
