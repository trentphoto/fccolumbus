import React from 'react'
import styled from '../../styled-components'
import Menu from '../../metadata/menu'
import { Link } from 'react-router-dom'
import { ContactInfoItem } from './ContactInfo'

const StyledTakeoverList = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
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

class TakeoverListDesktop extends React.Component<Props> {
  pageChangeRequested = () => {
    this.props.onChange()
  }

  render() {
    return (
      <>
        <StyledTakeoverList>
          {Menu.map(i => (
            <div key={i.slug}>
              <Header
                as={Link}
                to={'/' + i.slug}
                onClick={this.pageChangeRequested}
              >
                {i.title}
              </Header>
              {i.subpages && (
                <LinkList>
                  {i.subpages.map((sub: Subpage) => (
                    <ListItem
                      as={Link}
                      to={`/${i.slug}/${sub.slug}`}
                      key={sub.slug}
                      onClick={this.pageChangeRequested}
                    >
                      {sub.title}
                    </ListItem>
                  ))}
                </LinkList>
              )}
            </div>
          ))}
        </StyledTakeoverList>
      </>
    )
  }
}

export default TakeoverListDesktop
