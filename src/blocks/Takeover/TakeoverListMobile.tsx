import React from 'react'
import styled from '../../styled-components'
import Menu from '../../metadata/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { ContactInfoItem } from './ContactInfo'
import NavButton from '../Navbar/NavButton'

const StyledTakeoverList = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5rem;
`

const Header = styled(ContactInfoItem)<IContactInfoItem>`
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
  padding: 1rem;
  color: white;
  cursor: pointer;
`

const LinkList = styled.div``

const Back = styled(props => <NavButton {...props} />)`
  display: inline-flex;
`

interface IContactInfoItem {
  to?: string
}

const ListItem = styled(ContactInfoItem)<IContactInfoItem>`
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  color: white;

  &:hover {
    color: white;
  }
`

interface Props {
  onChange: () => void
}

interface State {
  active: MenuItem
}

class TakeoverListMobile extends React.Component<Props, State> {
  state = {
    active: {
      title: '',
      slug: '',
      subpages: []
    }
  }

  returnN = () => ({ title: '', slug: '', subpages: [] })

  updateActive = (item: MenuItem) => this.setState({ active: item })

  clearActive = () => this.setState({ active: this.returnN() })

  pageChangeRequested = () => {
    this.props.onChange()
    this.clearActive()
  }

  render() {
    const { active } = this.state

    if (!active.title) {
      return (
        <StyledTakeoverList>
          {Menu.map((i: MenuItem) => (
            <Header key={i.title} onClick={this.updateActive.bind(this, i)}>
              {i.title}
            </Header>
          ))}
        </StyledTakeoverList>
      )
    } else {
      return (
        <StyledTakeoverList>
          <Back onClick={this.clearActive}>
            <FontAwesomeIcon icon="chevron-left" size="2x" />
          </Back>
          <Header
            as={Link}
            to={'/' + active.slug}
            onClick={this.pageChangeRequested}
          >
            {active.title}
          </Header>
          {active.subpages && (
            <LinkList>
              {active.subpages.map((i: Subpage) => (
                <ListItem
                  as={Link}
                  to={`/${active.slug}/${i.slug}`}
                  key={i.slug}
                  onClick={this.pageChangeRequested}
                >
                  {i.title}
                </ListItem>
              ))}
            </LinkList>
          )}
        </StyledTakeoverList>
      )
    }
  }
}

export default TakeoverListMobile
