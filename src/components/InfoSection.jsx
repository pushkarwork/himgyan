import React from 'react'
import InfoCards from './InfoCards'
import WelcomeS from './WelcomeS'
import Internship from './Internship'

const InfoSection = () => {
    return (
        <div className=' w-full  relative md:top-[-100px] top-8 z-10 '>
            <div className='w-[80%] z-20   bg-gray-50 mx-auto grid lg:grid-cols-3 sm:grid-cols-2 h-fit  lg:grid-rows-2 shadow-2xl items-center shadow-black rounded-2xl md:h-[80%]'>
                <InfoCards />

            </div>



        </div>
    )
}

export default InfoSection
