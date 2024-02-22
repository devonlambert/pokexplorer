import { Box } from '@chakra-ui/react'
import { Placeholder } from '../components/Placeholder'

import { useFetch } from '../hooks/useFetch'
import { PokemonList } from '../components/PokemonList'

export const Main = () => {
    const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/')

    return loading ? <div>loading....</div> : (
        <Box as="main" role="main" width="full" bg="bg.accent.default">
            <PokemonList pokemonData={data} />
        </Box>
    )
}