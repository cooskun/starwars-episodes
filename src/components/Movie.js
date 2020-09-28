import React, { useContext } from 'react'
import MovieColumn from './MovieColumn'
import CustomListItem from './CustomListItem'
import { MovieContext } from '../context'

const Movie = ({ movie }) => {
  const { dispatch } = useContext(MovieContext)

  return (
    <CustomListItem
      onClick={() => dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie })}>
      <MovieColumn
        title={movie.title}
        episode={movie.episode_id}
        releaseDate={movie.release_date}
      />
    </CustomListItem>
  )
}

export default Movie
