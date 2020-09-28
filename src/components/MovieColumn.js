import React from 'react'
import { Grid, Text } from '@chakra-ui/core'

const MovieColumn = ({ title, episode, releaseDate }) => {
  return (
    <Grid templateColumns="1fr 3fr 1fr">
      <Text isTruncated>EPISODE {episode}</Text>
      <Text isTruncated>{title}</Text>
      <Text isTruncated>{releaseDate}</Text>
    </Grid>
  )
}

export default MovieColumn
