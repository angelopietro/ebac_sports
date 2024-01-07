import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootReducer } from '..'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFavoritos: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      const existeNosFavoritos = state.itens.find(
        (item) => item.id === favorito.id
      )

      if (existeNosFavoritos) {
        state.itens = state.itens.filter((item) => item.id !== favorito.id)
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { adicionarFavoritos } = favoritosSlice.actions

export const existeNosFavoritos = (state: RootReducer, produto: Produto) => {
  return state.favoritos.itens.some((item) => item.id === produto.id)
}

export default favoritosSlice.reducer
