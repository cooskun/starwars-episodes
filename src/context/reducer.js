import { sortBy } from 'lodash'
import {
  LOAD_MOVIES,
  SET_SELECTED_MOVIE,
  FILTER_MOVIES_BY_TITLE,
  SORT_MOVIES_BY_YEAR,
  SORT_MOVIES_BY_EPISODE,
} from './contants'

export const initialState = {
  movies: [],
  selectedMovie: null,
  filteredMovies: null,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        filteredMovies: action.payload,
      }

    case SET_SELECTED_MOVIE:
      return { ...state, selectedMovie: action.payload }

    case FILTER_MOVIES_BY_TITLE:
      const searchTerm = action.payload.toLowerCase()
      const filteredMovies = state.movies.filter(movie =>
        movie.fields.title.toLowerCase().includes(searchTerm)
      )
      return { ...state, filteredMovies }

    case SORT_MOVIES_BY_YEAR:
      return {
        ...state,
        movies: sortBy(state.movies, 'fields.release_date'),
        filteredMovies: sortBy(state.filteredMovies, 'fields.release_date'),
      }

    case SORT_MOVIES_BY_EPISODE:
      return {
        ...state,
        movies: sortBy(state.movies, 'fields.episode_id'),
        filteredMovies: sortBy(state.filteredMovies, 'fields.episode_id'),
      }

    default:
      return state
  }
}
