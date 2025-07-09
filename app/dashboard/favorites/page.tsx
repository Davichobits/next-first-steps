import { Metadata } from "next"
import { PokemonFavoriteGrid } from "@/pokemons/components/PokemonFavoriteGrid";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Pokemones favoritos',
}

const PokemonsPage = () => {

  
  
  return (
    <div className="flex flex-col p-3">

      <p className="text-5xl">Pokémons Favoritos <span className="text-blue-500">Global State</span></p>

      <PokemonFavoriteGrid />


    </div>
  )
}

export default PokemonsPage