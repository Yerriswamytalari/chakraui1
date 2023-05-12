import { Box, Container, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

const Form = () => {

    const [text,setText] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")

    const onChange = (e)=>{
      e.preventDefault();
      console.log(text,email,message)
      setText("")
      setEmail("")
      setMessage("")
    }

  return (
    <div>
      
        <Box style={{height:"300px"}} border="2px solid black" borderRadius={5} textAlign="center" m={10}p={10}>
            <Container>
                <form >
                    <Heading fontSize={30}>Contact Form</Heading><br></br>
                <Input style={{height:"30px",width:"300px",border:"2px"}}  m={2} value={text} onChange={(e)=>setText(e.target.value)} type='text' placeholder='Enter Your Name'></Input><br></br>
                <Input style={{height:"30px",width:"300px",border:"2px"}}  m={2} value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Your Email'></Input><br></br>
                <Input style={{height:"30px",width:"300px",border:"2px"}} m={2} value={message} onChange={(e)=>setMessage(e.target.value)} type='text' placeholder='Enter Your Message'></Input><br></br>
                <Button colorScheme='blue' onClick={onChange}>Button</Button>
                </form>
            </Container>
        </Box>
     
    </div>
  )
}

export default Form
