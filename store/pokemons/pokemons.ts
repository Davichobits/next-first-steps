import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons'

interface Favorites {
  [key: string]: SimplePokemon
}

interface PokemonState {
  favorites: Favorites
}

// const getInitialState = (): PokemonState => {
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
//   return favorites;
// }

const initialState: PokemonState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>){
      const pokemon = action.payload;
      const {id} = pokemon;

      if(!!state.favorites[id]){
        delete state.favorites[id];
        // return
      }else {
        state.favorites[id] = pokemon;
      }

      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    },

    setFavoritePokemons(state, action: PayloadAction<Favorites>){
      state.favorites = action.payload;
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer