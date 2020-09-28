import React, { createContext, useReducer } from 'react'

const initialState = {
  movies: [],
  selectedMovie: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_MOVIE':
      return { ...state, selectedMovie: action.payload }
    default:
      return state
  }
}

export const MovieContext = createContext()

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  )
}
