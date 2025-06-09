import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center md:mx-8 lg:mx-12 space-x-3 rtl:space-x-reverse">
                    <img src="images/tech.png" className="h-8" alt="Logo" />

                </a>

                {/* Toggle Button */}
                <button
                    onClick={toggleNavbar}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Navbar Items with Animated Height */}
                <div
                    className={`
            w-full lg:block lg:w-auto
            overflow-hidden transition-all duration-1200 ease-in-out
            ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
            lg:max-h-full lg:opacity-100
          `}
                    id="navbar-default"
                >
                    <ul className="font-medium flex gap-1.5 md:pl-8  flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-300 lg:mr-9 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li><a href="#" className="block py-2 px-3 text-white bg-[#a30b29] rounded md:bg-transparent md:text-primary md:p-0 transition-all ease duration-300 dark:text-white">Home</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-all ease duration-300 md:hover:text-primary md:p-0 dark:text-white">About Us</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-all ease duration-300 md:hover:text-primary md:p-0 dark:text-white">Services</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-all ease duration-300 md:hover:text-primary md:p-0 dark:text-white">Training</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 transition-all ease duration-300 md:hover:text-primary md:p-0 dark:text-white">Contact Us</a></li>
                        <li><a href="#" className="block py-2 px-3 md:bg-primary text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary transition-all ease duration-400 md:px-2 md:py-0 dark:text-white">Hiring</a></li>
                        <li><a href="#" className="block py-2 px-3 md:bg-primary text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-primary transition-all ease duration-400 md:px-2 md:py-0 dark:text-white">Our Internship</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
