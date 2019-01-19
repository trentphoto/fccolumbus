import styled from '../../styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  width: 100%;

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default Grid
