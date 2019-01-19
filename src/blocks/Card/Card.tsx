import React from 'react'
import styled from '../../styled-components'
import { Link } from 'react-router-dom'

interface DivProps {
  to?: string
}

const StyledCard = styled.div<DivProps>`
  background-color: ${props => props.theme.white};
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.05);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  color: ${props => props.theme.dark};
  cursor: pointer;
  transition: ${props =>
      props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
    all;

  &:hover {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.07);
    transform: translateY(-3px);
    color: ${props => props.theme.dark};
  }
`

const Content = styled.div`
  padding: 2rem;
`

const ImgWrapper = styled.div`
  max-height: 240px;
  overflow: hidden;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
  }
`

interface Props {
  title: string
  excerpt: string
  img?: string
  isLink?: boolean
  link?: string
  key?: string
  onClick?: () => void
}

const Card: React.SFC<Props> = ({
  onClick,
  img,
  title,
  excerpt,
  link,
  isLink
}) => {
  if (isLink) {
    return (
      <StyledCard as={Link} to={link}>
        {img && (
          <ImgWrapper>
            <img src={img} alt={title} />
          </ImgWrapper>
        )}
        <Content>
          <h3>{title}</h3>
          <p>{excerpt}</p>
        </Content>
      </StyledCard>
    )
  }
  return (
    <StyledCard onClick={onClick}>
      <ImgWrapper>
        <img src={img} alt={title} />
      </ImgWrapper>
      <Content>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </Content>
    </StyledCard>
  )
}

export default Card
