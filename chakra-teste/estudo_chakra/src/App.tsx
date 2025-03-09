import { Layout } from './componentes/Layout'
import { 
    ChakraProvider,
    defaultSystem,
    Input,
    Flex,
    Text,
    Box,
  } from '@chakra-ui/react'

// import styled from "styled-components"
// const Box = styled.div`
//     width: 100vw;
//     min-height: 200px;
//     background-color: #9A3B7E;`

function App() {

  return (
    <>
      <ChakraProvider value={defaultSystem}>
        <Flex gap="10" direction="column" align="center" justify="center">
        <Layout>
          <Box bg="#9413dc" minHeight="50vh" width="100vw">
            <Text fontSize="1.5rem">Faça login</Text>
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
          </Box>
          </Layout>
        </Flex>
      </ChakraProvider>
    </>
  )
}

export default App
