import React from 'react'
import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/core'
import { useDispatch } from '../hooks'
import { filterMoviesByTitle } from '../context/actions'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(filterMoviesByTitle(e.target.value))
  }

  return (
    <InputGroup>
      <InputLeftElement children={<Icon name="search" />} />
      <Input placeholder="Type to search..." onChange={handleChange} />
    </InputGroup>
  )
}

export default Filter
