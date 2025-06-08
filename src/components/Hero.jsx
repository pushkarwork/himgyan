import React from 'react'
import "../App.css"

const Hero = () => {
    return (
        <div className='relative w-full md:h-[90vh] h-screen overflow-hidden '>


            <div className='absolute inset-0 bg-[url("/images/banner.jpg")] bg-cover bg-center blur-[3px]'></div>


            <div className='inset-0 absolute z-1 bg-[#00000071] '></div>


            <div className=' relative z-10 flex flex-col gap-7 pl-2 pb-30 md:pb-18 md:px-5 md:items-center justify-center h-full'>
                <p className='text-2xl text-grey mt-4'>Welcome To Himgyan Tech
                </p>
                <h1 className='text-6xl text-grey font-bold'>Him<span className='text-primary'>gyan</span> Tech</h1>
                <div className='mt-5 flex gap-10 md:gap-8'>
                    <button className='holo-button relative overflow-hidden rounded-4xl font-bold px-9 py-4 md:px-3 md:py-2 text-primary bg-grey   border-0 cursor-pointer'>Our Services</button>
                    <button className='rounded-4xl holo-button relative overflow-hidden font-bold px-9 py-4 md:px-3 md:py-2 text-primary bg-grey  cursor-pointer border-0'>Contact Us</button>
                </div>
            </div>

        </div>
    )
}

export default Hero
