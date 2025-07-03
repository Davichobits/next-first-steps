import { Metadata } from "next"
import { PokemonGrid } from "../../../pokemons";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Pokemones favoritos',
}

const PokemonsPage = async () => {
  
  return (
    <div className="flex flex-col p-3">

      <p className="text-5xl">Pokémons Favoritos <span className="text-blue-500">Global State</span></p>

      <PokemonGrid pokemons={[]} />


    </div>
  )
}

export default PokemonsPage