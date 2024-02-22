import { PokemonCard } from './PokemonCard'

export const PokemonList = ({pokemonData}) => (
    <>
        {pokemonData && pokemonData.map((pokemon) => {
            return (<PokemonCard key={pokemon.url} pokemon={pokemon} />)
        })}
    </>
)