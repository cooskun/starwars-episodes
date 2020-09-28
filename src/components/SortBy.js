import React from 'react'
import {
  Button,
  List,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/core'
import CustomListItem from './CustomListItem'
import { useDispatch } from '../hooks'
import { sortMoviesByEpisode, sortMoviesByYear } from '../context/actions'

const SortBy = () => {
  const dispatch = useDispatch()

  const handleEpisodeSorting = () => dispatch(sortMoviesByEpisode())

  const handleYearSorting = () => dispatch(sortMoviesByYear())

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button>Sort by...</Button>
      </PopoverTrigger>
      <PopoverContent zIndex="10" textAlign="left">
        <PopoverCloseButton />
        <PopoverHeader fontWeight="700">Sort by...</PopoverHeader>
        <PopoverBody p={0}>
          <List>
            <CustomListItem onClick={handleEpisodeSorting}>
              <Text py="0.5rem" px="1rem">
                Episode
              </Text>
            </CustomListItem>
            <CustomListItem onClick={handleYearSorting}>
              <Text py="0.5rem" px="1rem">
                Year
              </Text>
            </CustomListItem>
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default SortBy
