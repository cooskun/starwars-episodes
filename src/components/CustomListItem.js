import React from 'react'
import { Divider, ListItem } from '@chakra-ui/core'

const CustomListItem = ({ children }) => {
  return (
    <ListItem cursor="pointer" _hover={{ bg: 'gray.100' }}>
      {children}
      <Divider mb={0} />
    </ListItem>
  )
}

export default CustomListItem
