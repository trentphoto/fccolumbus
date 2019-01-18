import React from 'react'
import styled from '../../styled-components'

const StyledPostCard = styled.div`
  background-color: ${props => props.theme.white};
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.05);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  transition: ${props =>
      props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
    all;

  &:hover {
    box-shadow: 0 35px 50px rgba(0, 0, 0, 0.07);
    transform: translateY(-3px);
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
  img: string
  onClick?: () => void
}

const PostCard: React.SFC<Props> = props => (
  <StyledPostCard onClick={props.onClick}>
    <ImgWrapper>
      <img src={props.img} alt={props.title} />
    </ImgWrapper>
    <Content>
      <h3>{props.title}</h3>
      <p>{props.excerpt}</p>
    </Content>
  </StyledPostCard>
)

export default PostCard
