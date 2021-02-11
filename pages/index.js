import styled from 'styled-components'

const TitleStyle = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
function Title(props) {
  return <h1>{props.children}</h1>
}
export default function Home() {
  return (
    <div>
      <TitleStyle><Title>Seja bem vindo</Title></TitleStyle>
    </div>
  )
}
