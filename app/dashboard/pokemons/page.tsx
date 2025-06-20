import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { Metadata } from "next"
import Image from "next/image";

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
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          pokemons.map(pokemon => (<Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
          />))}
      </div>


    </div>
  )
}

export default PokemonsPage