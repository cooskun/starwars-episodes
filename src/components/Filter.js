import React from 'react'
import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/core'

const Filter = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<Icon name="search" />} />
      <Input placeholder="Type to search..." />
    </InputGroup>
  )
}

export default Filter
