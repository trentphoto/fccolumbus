import React from 'react'
import styled from '../../styled-components'

import { getDayName, getMonthName } from '../../utils/dates'

import Datebox from './Datebox'
import Time from './Time'
import Title from './Title'
import Description from './Description'
import { Link } from 'react-router-dom'

interface IProps {
  title: string
  description?: string
  date: Date
  time: string
  slug: string
}

const EventCard_styled = styled(Link)`
  background-color: ${props => props.theme.white};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  margin: 2rem 0;
  color: ${props => props.theme.dark};
  transition: ${props =>
      props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
    all;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
    color: ${props => props.theme.dark};
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 1.5rem;
`

const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 2rem auto;
  padding: 0 5rem;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: ${props => props.theme.lightgray};
  }
`

class EventCard extends React.Component<IProps> {
  public static Datebox = Datebox
  public static Time = Time
  public static Title = Title
  public static Description = Description
  public render() {
    return (
      <EventCard_styled to={'/gather/events/' + this.props.slug}>
        <Datebox
          date={this.props.date.getDate()}
          month={getMonthName(this.props.date.getMonth())}
          day={getDayName(this.props.date.getDay())}
        />
        <Info>
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
          <Time>{this.props.time}</Time>
        </Info>
        <CTA>More Info</CTA>
      </EventCard_styled>
    )
  }
}

export default EventCard
