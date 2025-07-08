import { createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons'

interface PokemonState {
  [key: string]: SimplePokemon
}

const initialState: PokemonState = {
  '1': {id: '1', name: 'bulbasaur'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
});

export const {} = pokemonsSlice.actions

export default pokemonsSlice.reducer