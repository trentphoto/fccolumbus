import styled from '../../styled-components'

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  z-index: 500;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.redDark};
    opacity: 0.98;
    z-index: -1;
  }
`
