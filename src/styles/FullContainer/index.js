import styled from 'styled-components'

const FullContainer = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.gray.mercury};
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export default FullContainer
