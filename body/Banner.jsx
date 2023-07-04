import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <>
   <div className='containerbody'> 
     <Image className='banner'
      src="https://theme.hstatic.net/200000548801/1000899170/14/slide_2_img.jpg?v=35"

      width={1200}
      height={350}
      alt="Picture of the author"
    />

    </div>
    </>
  )

}

export default Banner