import { useContext } from 'react'
import { MovieContext } from '../context'

const useSelectedMovie = () => {
  const {
    state: { selectedMovie },
  } = useContext(MovieContext)

  return selectedMovie
}

export default useSelectedMovie
