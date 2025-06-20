import { Metadata } from "next"
import { PokemonsResponse, SimplePokemon, PokemonGrid } from "@/app/pokemons";

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

  return pokemons;
}



const PokemonsPage = async () => {

  const pokemons = await getPokemons(150);
  
  return (
    <div className="flex flex-col bg-white">

      <span className="text-5xl my-2">Listado de pokémons <small>stático</small></span>

      <PokemonGrid pokemons={pokemons} />


    </div>
  )
}

export default PokemonsPage