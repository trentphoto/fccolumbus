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
  item?: MenuItem
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

  componentDidMount() {
    document.addEventListener('keydown', this.updateActiveOnEnter, false)
    document.addEventListener('keydown', this.clearActiveOnEnter, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.updateActiveOnEnter, false)
    document.removeEventListener('keydown', this.clearActiveOnEnter, false)
  }

  updateActiveOnEnter = (e: any) => {
    if (
      document.activeElement &&
      document.activeElement.classList.contains('MobileMenuItem') &&
      e.keyCode === 13
    ) {
      const index = document.activeElement.getAttribute('data-index')
      index && this.updateActive(Menu[index])

      // focus the back button
      setTimeout(() => {
        const a = document.getElementById('BackButton')
        a && a.focus()
      }, 50)
    }
  }

  returnN = () => ({ title: '', slug: '', subpages: [] })

  updateActive = (item: MenuItem) => this.setState({ active: item })

  clearActive = () => this.setState({ active: this.returnN() })

  clearActiveOnEnter = (e: any) => {
    if (
      document.activeElement &&
      document.activeElement.id === 'BackButton' &&
      e.keyCode === 13
    ) {
      this.clearActive()
    }
  }

  pageChangeRequested = () => {
    this.props.onChange()
    this.clearActive()
  }

  render() {
    const { active } = this.state

    // top-level menu
    if (!active.title) {
      return (
        <StyledTakeoverList>
          {Menu.map((i: MenuItem, ind: number) =>
            i.subpages ? (
              <Header
                key={i.slug}
                onClick={this.updateActive.bind(this, i)}
                tabIndex={0}
                item={i}
                className="MobileMenuItem"
                data-index={ind}
              >
                {i.title}
              </Header>
            ) : (
              <Header
                key={i.slug}
                as={Link}
                to={'/' + i.slug}
                onClick={this.pageChangeRequested}
                tabIndex={0}
              >
                {i.title}
              </Header>
            )
          )}
        </StyledTakeoverList>
      )
    }

    // if a submenu is active
    return (
      <StyledTakeoverList>
        <Back onClick={this.clearActive} id="BackButton">
          <FontAwesomeIcon icon="chevron-left" size="2x" />
        </Back>
        <Header
          as={Link}
          to={'/' + active.slug}
          onClick={this.pageChangeRequested}
          tabIndex={0}
        >
          {active.title}
        </Header>
        {active.subpages && (
          <LinkList>
            {active.subpages.map((i: Subpage) => (
              <ListItem
                as={Link}
                tabIndex={0}
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

export default TakeoverListMobile
