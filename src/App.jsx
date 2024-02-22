import { Container, Flex, Stack } from '@chakra-ui/react'
import { Footer } from './template/Footer'
import { Main } from './template/Main'
import { Navbar } from './template/Navbar'
import { Sidebar } from './template/Sidebar'

import { useFetch } from './hooks/useFetch'

export const App = () => {
  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/')

  console.log(data, loading, error)

  return (
    <Flex direction="column" flex="1">
      <Navbar />
      <Container py="16" flex="1">
            <Stack
              direction={{
                base: 'column',
                lg: 'row',
              }}
              spacing={{
                base: '12',
                lg: '16',
              }}
              flex="1"
            >
          <Main />
          <Sidebar />
        </Stack>
      </Container>
      <Footer />
    </Flex>
  )
}