import { useContext } from 'react'
import { MovieContext } from '../context'

const useDispatch = () => {
  const { dispatch } = useContext(MovieContext)
  return dispatch
}

export default useDispatch
