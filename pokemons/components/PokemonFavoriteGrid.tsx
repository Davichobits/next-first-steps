'use client';
import { useState } from "react";
import { useAppSelector } from "@/store";
import { PokemonCard } from "..";


export const PokemonFavoriteGrid = () => {
  const favoritesPokemons = useAppSelector(state => state.pokemons)
  const [pokemons] = useState(Object.values(favoritesPokemons))

  
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {
        pokemons.length === 0 && <h2>No hay pokemones</h2>
      }
        {
          pokemons.map(pokemon => (
          
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))}
      </div>
  )
}
