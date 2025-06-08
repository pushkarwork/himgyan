import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-[url("/images/footer.jpg")] relative z-10  bg-fixed bg-cover bg-center bg-no-repeat py-10 mt-10'>
            <div className='absolute inset-0 z-20 bg-[#000000a5]'></div>

            <div className='grid md:grid-cols-3 md:gap-4  gap-8 relative w-[95%] md:w-[90%] mx-auto grid-cols-1 z-50'>

                <div className=' flex flex-col  px-2 gap-2 text-white'>
                    <h3 className='border-b border-gray-50 pb-2 font-bold text-2xl'>ABOUT US</h3>
                    <div className='flex gap-4 '>
                        <img className='w-1/2' src="/images/tech.png" />
                        <p className=' text-lg'>Himgyan Tech</p>

                    </div>
                    <p>Himgyan Tech to provide IT Training/Services for the Individuals, Industries or Businesses to improve their productivity levels.</p>
                    <p>Copyright 2025 ©<span className='text-primary'> Himgyan Tech</span></p>
                </div>

                <div className=' flex flex-col  px-2 gap-2 text-white'>
                    <h3 className='border-b border-gray-50 pb-2 font-bold text-2xl'>USEFUL LINKS</h3>
                    <ul className='flex flex-col gap-2'>

                        <li>About Us</li>
                        <li>Service</li>
                        <li>Training</li>
                        <li>Internship</li>
                        <li>Privacy Policy</li>

                    </ul>
                </div>
                <div className=' flex flex-col px-2 gap-2 text-white'>
                    <h3 className='border-b border-gray-50 pb-2 font-bold text-2xl'>CONTACT INFO</h3>
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p className='flex gap-2 '><span className='h-fit mt-[4px]'><svg width="25px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>47 Molarband Village, Badarpur,
                        New Delhi - 110044</p>
                    <p className='flex items-center gap-2'><span className='h-fit  mt-[4px]'><svg width="25px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>info@himgyantech.com</p>
                    <div>ICONS HERE social media</div>
                </div>

            </div>


        </div>
    )
}

export default Footer
