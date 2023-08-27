import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import carrinhoReducer from './reducer/carrinho'
import favoritarReducer from './reducer/favoritos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritarReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
