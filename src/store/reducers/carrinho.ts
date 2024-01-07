import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((item) => item.id === produto.id)) {
        alert(`O produto ${produto.nome} já existe no carrinho!`)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarProduto } = carrinhoSlice.actions
export default carrinhoSlice.reducer
