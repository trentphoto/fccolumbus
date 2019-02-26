import React from 'react'
import { Card, Section } from '../../blocks'
import StaffSlideOut from '../../blocks/StaffSlideOut'
import withSEO from '../../utils/withSEO'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'
import { connect } from 'react-redux'
import placeholderImg from '../../img/user.svg'

interface Props extends RouteComponentProps<MatchParams> {
  staff: ReduxState['staff']['allStaff']
}

interface MatchParams {
  slug: string
}

class StaffPage extends React.Component<Props> {
  state = {
    member: this.props.staff[0],
    open: false
  }

  updateMember = (member: ProcessedStaff) => {
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
                {this.props.staff &&
                  this.props.staff.data.map((i: ProcessedStaff) => (
                    <Card.Card
                      key={i.name}
                      title={i.name}
                      excerpt={i.title}
                      img={i.img || placeholderImg}
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

const mapStateToProps = (state: ReduxState) => ({
  staff: state.staff.allStaff
})

export default connect(mapStateToProps)(withSEO(StaffPage, { title: 'Staff' }))
