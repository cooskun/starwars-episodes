import React from 'react'
import MovieColumn from './MovieColumn'
import CustomListItem from './CustomListItem'
import { useDispatch } from '../hooks'
import { setSelectedMovie } from '../context/actions'

const Movie = ({ movie }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setSelectedMovie(movie))
  }

  return (
    <CustomListItem onClick={handleClick}>
      <MovieColumn
        title={movie.title}
        episode={movie.episode_id}
        releaseDate={movie.release_date}
      />
    </CustomListItem>
  )
}

export default Movie
