import { useEffect, useState } from 'react'

const useMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://star-wars-api.herokuapp.com/films')
      .then(res => res.json())
      .then(res => setMovies(res))
      .catch(err => console.log(err))
  }, [])

  return movies
}

export default useMovies
