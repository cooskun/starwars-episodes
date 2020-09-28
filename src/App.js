import React, { useEffect } from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SelectedMovie from './components/SelectedMovie'
import { Box, CSSReset, Grid, ThemeProvider } from '@chakra-ui/core'
import { useMovies, useDispatch } from './hooks'
import { loadMovies } from './context/actions'

function App() {
  const movies = useMovies()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadMovies(movies))
  }, [movies, dispatch])

  return (
    <ThemeProvider>
      <CSSReset />
      <Grid templateRows="auto 1fr" style={{ minHeight: '100vh' }}>
        <Header />
        <Grid templateColumns="repeat(2, 1fr)">
          <Box borderRightWidth="1px">
            <MovieList />
          </Box>
          <Box textAlign="left" padding="2rem">
            <SelectedMovie />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
