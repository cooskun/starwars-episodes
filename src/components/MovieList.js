import React from 'react'
import { List } from '@chakra-ui/core'
import Movie from './Movie'
import { useFilteredMovies } from '../hooks'

const MovieList = () => {
  const filteredMovies = useFilteredMovies()

  if (!filteredMovies) return null

  return (
    <List
      style={{
        lineHeight: '3',
        textAlign: 'left',
        textIndent: '1rem',
      }}>
      {filteredMovies.map(movie => (
        <Movie movie={movie.fields} key={movie.id} />
      ))}
    </List>
  )
}

export default MovieList
