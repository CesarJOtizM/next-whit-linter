import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  border-style: solid;
  border-width: 10px;
  color: blue;
`
const Home: React.FC = () => {
  return <Div> Hola mundo </Div>
}

export default Home
