import { PokemonResponse } from "@/pokemons"
import { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({params}: Props): Promise<Metadata>{

  const { id } = await params

  const { name } = await getPokemon(id);

  return {
    title: `#${id} - ${name}`,
    description: `Página del pokemon ${name}`,
  }
}

const getPokemon = async (id:string = '1'): Promise <PokemonResponse> => {
  const data:PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache' //TODO: cambiar
  }).then(res => res.json());
  return data;
}

export default async function PokemonPage({params}: Props) {

  const { id } = await params
  const pokemon = await getPokemon(id);

  return <div>Pokemon: {pokemon.name}</div>

}