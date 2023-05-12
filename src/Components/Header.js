import { Box, Center, Heading ,Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Box textAlign="center"  m={20}>
        <Heading fontSize={50}>Our Latest Version of Photography</Heading>
        <Text>For Any Photography Proposal, kindly fill the below contact form </Text>
      </Box>
    </div>
  )
}

export default Header
