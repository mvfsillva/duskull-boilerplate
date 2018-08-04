import styled from 'styled-components'

const ImageRender = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: ${props => props.height}px;
  width: ${props => (!props.width ? 'auto' : `${props.width}px`)};
`

export default ImageRender
