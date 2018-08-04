import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: center;
  align-self: center;
  font-family: ${props => props.theme.fonts.primary};
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

const HeaderWrapper = styled.div`
  margin-top: 3rem;
  font-family: ${props => props.theme.fonts.primary};
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

export { Wrapper, HeaderWrapper }
