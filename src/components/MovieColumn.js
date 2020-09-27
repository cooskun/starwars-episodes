import React from 'react'
import { Grid, Text } from '@chakra-ui/core'

const MovieColumn = ({
  episode = 'Episode 1',
  fullname = 'Episode 1 - The Phantom Menace',
  releaseDate = '1977-05-25',
}) => {
  return (
    <Grid templateColumns="1fr 3fr 1fr">
      <Text isTruncated>{episode}</Text>
      <Text isTruncated>{fullname}</Text>
      <Text isTruncated>{releaseDate}</Text>
    </Grid>
  )
}

export default MovieColumn
