import React from 'react'
import styled from '../../styled-components'
import { StyledExit } from '../MenuTakeover/Exit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Content } from '..'

const Parent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 600;
  visibility: hidden;

  &.active {
    visibility: visible;
  }

  &.active .Bg {
    visibility: visible;
    opacity: 1;
  }

  &.active .StyledStaffSlideOut {
    transform: translateX(0);
  }
`

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  visibility: hidden;
  opacity: 0;
  transition: ${props =>
      props.theme.timing.duration.fast + ' ' + props.theme.timing.curve}
    all;
`

const StyledStaffSlideOut = styled.div`
  background-color: white;
  padding: 5rem 3rem 3rem 3rem;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 500px;
  overflow-y: scroll;
  transform: translateX(100%);
  transition: ${props =>
      props.theme.timing.duration.fast + ' ' + props.theme.timing.curve}
    all;
`

const ExitDark = styled(StyledExit)`
  background-color: ${props => props.theme.lightgray};
  color: #000;
  &:hover {
    background-color: ${props => props.theme.red};
    color: white;
  }
`

interface Props {
  member: StaffMember | null
  open: boolean
  close: () => void
}

const StaffSlideOut = (props: Props) => (
  <Parent className={props.open ? 'active' : ''}>
    <Bg className="Bg" onClick={props.close} />
    <StyledStaffSlideOut className="StyledStaffSlideOut">
      <ExitDark onClick={props.close}>
        <FontAwesomeIcon icon="times" size="2x" />
      </ExitDark>
      {props.member && (
        <img
          src={props.member.img}
          alt={props.member.name}
          className="img-fluid w-50 mb-3"
        />
      )}
      <h1>{props.member && props.member.name}</h1>
      <h3 className="mb-3">{props.member && props.member.title}</h3>
      <p>
        <FontAwesomeIcon className="mr-2" icon="phone" />
        <span>{props.member && props.member.phone}</span>
      </p>
      <p>
        <FontAwesomeIcon className="mr-2" icon="envelope" />
        <span>{props.member && props.member.email}</span>
      </p>
      <Content content={props.member ? props.member.bio : ''} />
    </StyledStaffSlideOut>
  </Parent>
)

export default StaffSlideOut
