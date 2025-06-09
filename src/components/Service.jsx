import React from 'react'
import ServiceCard from './ServiceCard'

const Service = () => {
    return (
        <div className='w-full pt-12 flex relative flex-col items-center  border mt-10 pb-20 z-50 gap-10'>
            <div className=' absolute inset-0 bg-[url("images/banner.jpg")] bg-fixed z-0 opacity-80 bg-cover bg-center w-full h-full'></div>
            <div className='absolute inset-0 bg-[#000000a5] z-10'></div>
            <h1 className='text-3xl text-white font-lg headingForAnimation relative z-20'>Our Services</h1>

            <ServiceCard />



        </div >
    )
}

export default Service
