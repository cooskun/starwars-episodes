import React from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import {
  Box,
  CSSReset,
  Grid,
  Heading,
  Stack,
  Text,
  ThemeProvider,
} from '@chakra-ui/core'

import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Grid
        templateRows="auto 1fr"
        style={{ minHeight: '100vh' }}
        className="App">
        <Header />
        <Grid templateColumns="repeat(2, 1fr)">
          <Box borderRightWidth="1px">
            <MovieList />
          </Box>
          <Box textAlign="left" padding="2rem">
            <Stack spacing={8}>
              <Heading as="h1" size="lg">
                Episode V - The Empire Strikes Back
              </Heading>
              <Text>
                It is a dark time for the Rebellion. Although the Death Star has
                been destroyed, Imperial troops have driven the Rebel forces
                from their hidden base and pursued them across the galaxy.
                Evading the dreaded Imperial Starfleet, a group of freedom
                fighters led by Luke Skywalker has established a new secret base
                on the remote ice world of Hoth. The evil lord Darth Vader,
                obsessed with finding young Skywalker, has dispatched thousands
                of remote probes into the far reaches of space....
              </Text>
              <Text>Directed by: Irvin Keshner</Text>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
