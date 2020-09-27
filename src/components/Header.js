import React from 'react'
import { Box, Grid } from '@chakra-ui/core'
import SortBy from './SortBy'
import Filter from './Filter'

const Header = () => {
  return (
    <Box as="header" bg="blue.400" w="100%" p={4}>
      <Grid templateColumns="1fr 5fr" gridGap="1rem">
        <SortBy />
        <Filter />
      </Grid>
    </Box>
  )
}

export default Header
