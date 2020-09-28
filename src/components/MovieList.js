import React from 'react'
import Movie from './Movie'
import { List } from '@chakra-ui/core'

const MovieList = ({ movies }) => {
  if (!movies) return null

  return (
    <List
      style={{
        lineHeight: '3',
        textAlign: 'left',
        textIndent: '1rem',
      }}>
      {movies.map(movie => (
        <Movie movie={movie.fields} key={movie.id} />
      ))}
    </List>
  )
}

export default MovieList
