import React from 'react'
import {HStack, Heading} from "@chakra-ui/react";
import {PlusSquareIcon} from "@chakra-ui/icons"

const Navbar = () => {
  return (
    <div>
    <HStack bg="skyblue" h="50px">
        <PlusSquareIcon boxSize={30}></PlusSquareIcon>
        <Heading fontSize={30}>Photo Plus</Heading>
    </HStack>
    </div>
  )
}

export default Navbar
