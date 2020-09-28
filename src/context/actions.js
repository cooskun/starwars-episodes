import {
  LOAD_MOVIES,
  FILTER_MOVIES_BY_TITLE,
  SET_SELECTED_MOVIE,
  SORT_MOVIES_BY_EPISODE,
  SORT_MOVIES_BY_YEAR,
} from './contants'

export const loadMovies = movies => {
  return { type: LOAD_MOVIES, payload: movies }
}

export const filterMoviesByTitle = title => {
  return {
    type: FILTER_MOVIES_BY_TITLE,
    payload: title,
  }
}

export const setSelectedMovie = movie => {
  return { type: SET_SELECTED_MOVIE, payload: movie }
}

export const sortMoviesByEpisode = () => {
  return { type: SORT_MOVIES_BY_EPISODE }
}

export const sortMoviesByYear = () => {
  return { type: SORT_MOVIES_BY_YEAR }
}
