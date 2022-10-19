import React from 'react'
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl-[700]px'>
        <Image 
            src='https://links.papareact.com/0fm'
            layout='fill'
            objectFit='cover' objectPosition='bottom'
        />
        <div className='absolute top-1/3 w-full text-center'>
          <p className='text-md sm:text-xl md:text-2xl'>Not sure where to go? Perfect.</p>
          <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 cursor-pointer 
                              hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
        </div>
    </div>
  )
}

export default Banner