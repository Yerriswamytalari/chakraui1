import React from 'react'
import Images from "../jsonData.json"
import { Grid,Image } from '@chakra-ui/react'

const Gridimages = () => {
  return (
    <div >
     <Grid templateColumns="repeat(3,1fr)" gap={6}>
     {Images.map(item=>
     <Image style={{height:"300px",width:"400px",borderRadius:"5px"}} src={item.Image} alt={item.location} key={item.id}>

     </Image>)}
     </Grid>
    </div>
  )
}

export default Gridimages
