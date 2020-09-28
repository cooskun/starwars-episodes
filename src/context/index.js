import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer'

export const MovieContext = createContext()

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  )
}
