'use client';

import Link from "next/link"
import { SimplePokemon } from "../interfaces/simple-pokemon"
import Image from "next/image";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { toggleFavorite } from "@/store/pokemons/pokemons";
import { useAppSelector, useAppDispatch } from "@/store";

interface Props {
  pokemon: SimplePokemon
}


export const PokemonCard = ({ pokemon }: Props) => {
  
  const { id, name } = pokemon;
  const isFavorite = useAppSelector(state => state.pokemons.favorites[id] !== undefined);

  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleFavorite(pokemon));
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center justify-center">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            style={{ width: 100, height: 100 }}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <button onClick={()=>handleToggle()} className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer w-full" >

            <div className="text-red-600">

              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
              
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {
                  isFavorite ? 'Es favorito' : 'No es favorito' 
                }
                
              </p>
              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>

          </button>
          
        </div>

        
      </div>
    </div>
  )
}
