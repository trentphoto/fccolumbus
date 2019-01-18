import React from 'react'
import staff from '../../metadata/staff'
import StaffCard from '../../blocks/StaffCard'
import styled from '../../styled-components'
import Section from '../../components/layout/Section'
import StaffSlideOut from '../../blocks/StaffSlideOut'

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

class StaffPage extends React.Component {
  state = {
    member: staff[0],
    open: false
  }

  updateMember = (member: StaffMember) => {
    this.setState({ member: member })
    this.open()
  }

  open = () => this.setState({ open: true })

  close = () => this.setState({ open: false })

  render() {
    return (
      <Section>
        <StaffSlideOut
          open={this.state.open}
          close={this.close}
          member={this.state.member}
        />
        <div className="container">
          <div className="row">
            <div className="col">
              <Grid>
                {staff.map(i => (
                  <StaffCard
                    key={i.name}
                    member={i}
                    onClick={this.updateMember.bind(this, i)}
                  />
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </Section>
    )
  }
}

export default StaffPage
