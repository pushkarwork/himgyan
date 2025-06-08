import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className='w-full flex flex-col bg-[#ffffffd0] items-center justify-center py-4 overflow-x-hidden mt-10 '>

            <div className='md:w-[85%] w-[95%] mx-auto  rounded-3xl grid lg:grid-cols-[30%_70%] md:grid-cols-2 shadow-lg shadow-[#0000009d]'>

                <div className='w-full hidden md:block px-2 my-6 flex-col border-r border-[#8080804a]'>
                    <h1 className='text-5xl mb-6 font-semibold italic'>Contact Us</h1>
                    <div className='border-b mx-3 border-[#8080804a] mb-2 pb-4 grid  grid-cols-[15%_80%]'>
                        <div >
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a30b29"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 11L11 13L15 9M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                        <div className='flex flex-col'>
                            <h5 className='text-2xl mb-1'>Location</h5>
                            <p>47 Molarband Village, Badarpur,
                                New Delhi - 110044</p>
                        </div>
                    </div>
                    <div className='border-b mx-3 border-[#8080804a]  mb-2 pb-4 grid  grid-cols-[15%_80%]'>
                        <div>
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a30b29"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 12C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2C14.2386 2 12 4.23858 12 7C12 7.79984 12.1878 8.55582 12.5217 9.22624C12.6105 9.4044 12.64 9.60803 12.5886 9.80031L12.2908 10.9133C12.1615 11.3965 12.6035 11.8385 13.0867 11.7092L14.1997 11.4114C14.392 11.36 14.5956 11.3895 14.7738 11.4783C15.4442 11.8122 16.2002 12 17 12Z" stroke="" strokeWidth="1.5"></path> <path d="M8.03759 7.31617L8.6866 8.4791C9.2723 9.52858 9.03718 10.9053 8.11471 11.8278C8.11471 11.8278 8.11471 11.8278 8.11471 11.8278C8.11459 11.8279 6.99588 12.9468 9.02451 14.9755C11.0525 17.0035 12.1714 15.8861 12.1722 15.8853C12.1722 15.8853 12.1722 15.8853 12.1722 15.8853C13.0947 14.9628 14.4714 14.7277 15.5209 15.3134L16.6838 15.9624C18.2686 16.8468 18.4557 19.0692 17.0628 20.4622C16.2258 21.2992 15.2004 21.9505 14.0669 21.9934C12.1588 22.0658 8.91828 21.5829 5.6677 18.3323C2.41713 15.0817 1.93421 11.8412 2.00655 9.93309C2.04952 8.7996 2.7008 7.77423 3.53781 6.93723C4.93076 5.54428 7.15317 5.73144 8.03759 7.31617Z" stroke="" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                        </div>
                        <div className='flex flex-col  '>
                            <h5 className='text-2xl mb-1'>Phone Number</h5>
                            <p>+91-8920223300 </p>
                            <p> +91-9650931923</p>
                            <p>  +91-8802033111</p>
                        </div>
                    </div>
                    <div className='border-b mx-3 border-[#8080804a]  mb-2 pb-4 grid grid-cols-[15%_80%]'>
                        <div className=' '>
                            <svg width="40px" height="40px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#a30b29" stroke="#a30b29" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.624"></g><g id="SVGRepo_iconCarrier"><path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                        </div>
                        <div className='flex  flex-col '>
                            <h5 className='text-2xl mb-1'>Email Address</h5>
                            <p className=''>himgyanit@gmail.com</p>
                            <p>info@himgyantech.com</p>
                        </div>
                    </div>

                </div>
                <div className='px-2  mb-4 '>
                    <h1 className='text-5xl my-6 mx-4 mb-4 font-semibold italic'>Get in Touch</h1>
                    <ContactForm />
                </div>
            </div>
        </div >
    )
}

export default Contact
