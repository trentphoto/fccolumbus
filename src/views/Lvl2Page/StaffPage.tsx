import React from 'react'
import staff from '../../metadata/staff'
import { Card, Section } from '../../blocks'
import StaffSlideOut from '../../blocks/StaffSlideOut'
import withSEO from '../../utils/withSEO'

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
              <Card.CardGrid>
                {staff &&
                  staff.map(i => (
                    <Card.Card
                      key={i.name}
                      title={i.name}
                      excerpt={i.title}
                      img={i.img}
                      onClick={this.updateMember.bind(this, i)}
                    />
                  ))}
              </Card.CardGrid>
            </div>
          </div>
        </div>
      </Section>
    )
  }
}

export default withSEO(StaffPage, { title: 'Staff' })
