import { useContext } from 'react'
import { MovieContext } from '../context'

const useFilteredMovies = () => {
  const {
    state: { filteredMovies },
  } = useContext(MovieContext)

  return filteredMovies
}

export default useFilteredMovies
