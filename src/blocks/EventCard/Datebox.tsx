import React from 'react'
import styled from '../../styled-components'

const Datebox_styled = styled.div`
  background-color: ${props => props.theme.red};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`

const Top = styled.div`
  display: flex;
  align-items: center;
`

const Date = styled.div`
  font-size: 60px;
  line-height: 60px;
`

const Month = styled.div`
  letter-spacing: 2px;
  font-size: 14px;
`

const Day = styled.div`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
`

interface Props {
  date: number
  month: string
  day: string
}

const Datebox: React.SFC<Props> = props => (
  <Datebox_styled>
    <Top>
      <Date>{props.date}</Date>
      <Month>{props.month}</Month>
    </Top>
    <Day>{props.day}</Day>
  </Datebox_styled>
)

export default Datebox
