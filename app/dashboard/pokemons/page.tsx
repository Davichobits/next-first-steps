import { Metadata } from "next"
import { PokemonsResponse, SimplePokemon, PokemonGrid } from "../../../pokemons";

export const metadata: Metadata = {
  title: 'Pokemons',
  description: 'Manage your Pokemons',
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  // throw Error('Este error no debería suceder.')

  return pokemons;
}



const PokemonsPage = async () => {

  const pokemons = await getPokemons(151);
  
  return (
    <div className="flex flex-col bg-white p-3">

      <p className="text-5xl">Listado de pokémons <span className="text-blue-500">estático</span></p>

      <PokemonGrid pokemons={pokemons} />


    </div>
  )
}

export default PokemonsPage