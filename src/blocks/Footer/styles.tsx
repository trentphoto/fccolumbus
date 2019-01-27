import styled from '../../styled-components'
import bgImg from '../../img/fcc-103.jpg'

const StyledFooter = styled('footer')`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center center;
  position: relative;
  padding: 5rem 0 0 0;

  .col-lg-3 {
    @media (max-width: 991px) {
      margin-top: 3rem;
    }
  }

  a,
  a:hover,
  h4,
  p {
    color: ${props => props.theme.white};
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: ${props => props.theme.redDark};
    opacity: 0.9;
  }

  & > * {
    z-index: 1;
    position: relative;
  }
`

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    padding: 7px 0;
    display: block;
    opacity: 1;
    transition: ${props =>
        props.theme.timing.duration.slow + ' ' + props.theme.timing.curve}
      opacity;

    &:hover {
      opacity: 0.8;
    }
  }
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);

  p {
    margin-bottom: 0;
    opacity: 0.8;
    text-align: center;
  }

  a {
    border-bottom: 2px solid white;
    padding-bottom: 2px;
  }
`

export { StyledFooter, LinkList, Copyright }
