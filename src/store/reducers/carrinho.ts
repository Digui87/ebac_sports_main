import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Produto } from "../../App";

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
    adicionar (state, action: PayloadAction<Produto>) => {
      const jogo = action.payload

      if (StaticRange.itens.find((produto) => produto.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
