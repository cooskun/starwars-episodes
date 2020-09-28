import React from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SelectedMovie from './components/SelectedMovie'
import { Box, CSSReset, Grid, ThemeProvider } from '@chakra-ui/core'
import { useMovies } from './hooks/useMovies'
import { MovieContextProvider } from './context'

function App() {
  const movies = useMovies()

  return (
    <ThemeProvider>
      <MovieContextProvider>
        <CSSReset />
        <Grid templateRows="auto 1fr" style={{ minHeight: '100vh' }}>
          <Header />
          <Grid templateColumns="repeat(2, 1fr)">
            <Box borderRightWidth="1px">
              <MovieList movies={movies} />
            </Box>
            <Box textAlign="left" padding="2rem">
              <SelectedMovie />
            </Box>
          </Grid>
        </Grid>
      </MovieContextProvider>
    </ThemeProvider>
  )
}

export default App
