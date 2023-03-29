import React from 'react'
import './Industry.css';
import {SimpleGrid, Box} from '@chakra-ui/react'
const Industry = () => {
  return (
    <div className='firstdiv12'>
<h1 className='digihead12'>IT Services in the Industry</h1>
<p className='digipara12'>IT services refers to the application of business and technical expertise to enable organizations in the 
creation, management, and optimization of or access to information and business processes. </p>
<div className='mini282'>
<SimpleGrid columns={1} spacing={10}>
  <Box className='Box28' >
    <h1 className='IThead'>web development</h1>
    <p className='ITpara'>Custom UX and innovative digital storytelling - We create websites that provide you the 
ability to outgrow, outperform, and outshine your adversaries. Build a web presence that 
stands out from the crowd with logixGo Web Development Services</p>
  </Box>
  <Box className='Box28' >
    <h1 className='IThead'>UI/UX Design Service</h1>
    <p className='ITpara'>Experience design at its finest with Logixgo UI/UX Design Services. There’s no limit to what 
you can get designed at Logixgo. From spectacular new illustrations to immersive 
wireframes, you name it and the talented global community of designers at Logixgo will 
make it happen. 
</p>
  </Box>

</SimpleGrid>
 
    </div>
</div>
  )
}
export default Industry