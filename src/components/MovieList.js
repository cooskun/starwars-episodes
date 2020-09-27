import React from 'react'
import Movie from './Movie'
import { List } from '@chakra-ui/core'

const MovieList = () => {
  return (
    <List
      style={{
        lineHeight: '3',
        textAlign: 'left',
        textIndent: '1rem',
      }}>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </List>
  )
}

export default MovieList
