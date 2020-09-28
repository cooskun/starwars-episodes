import React from 'react'
import { Heading, Stack, Text, Flex } from '@chakra-ui/core'
import { useSelectedMovie } from '../hooks'

const SelectedMovie = () => {
  const selectedMovie = useSelectedMovie()

  if (!selectedMovie)
    return (
      <Flex height="100%" alignItems="center" justifyContent="center">
        <Text fontSize="xl" fontWeight="700">
          No movie selected
        </Text>
      </Flex>
    )

  return (
    <Stack spacing={8}>
      <Heading as="h1" size="lg">
        {selectedMovie.title}
      </Heading>
      <Text>{selectedMovie.opening_crawl}</Text>
      <Text>Directed by: {selectedMovie.director}</Text>
    </Stack>
  )
}

export default SelectedMovie
