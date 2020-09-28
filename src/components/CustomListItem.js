import React from 'react'
import { Divider, ListItem } from '@chakra-ui/core'

const CustomListItem = ({ children, ...props }) => {
  return (
    <ListItem cursor="pointer" _hover={{ bg: 'gray.100' }} {...props}>
      {children}
      <Divider mb={0} />
    </ListItem>
  )
}

export default CustomListItem
