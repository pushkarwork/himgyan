import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const Internship = () => {
    useLayoutEffect(() => {
        const ctx3 = gsap.context(() => {
            gsap.from('.head3', {
                scrollTrigger: {
                    trigger: '.hell3',
                    start: 'top 80%',
                  
                },
                x: 800,
                delay: 1,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 1
            });
        });

        return () => ctx3.revert(); // 🧹 Cleanup on unmount
    }, []);
    return (
        <div className='w-full flex flex-col items-center overflow-x-hidden  mt-10 bg-[#ffffffb8] pb-10 gap-10'>
            <h1 className='text-4xl font-bold italic headingForAnimation relative'>Internship</h1>
            <div className='banner md:w-[90%] overflow-hidden w-[95%] md:h-[450px] shadow rounded-3xl shadow-black mx-auto '>
                <img className='object-cover' src='/images/internship.jpg' />
            </div>

            <div className='w-full flex justify-center'>
                <div className='hell3 md:w-[80%] w-95% mx-auto grid md:grid-cols-[35%_65%] gap-6'>
                    <div className=' md:w-full h-full'>
                        <img className='md:h-full md:w-full mx-auto object-cover' src='/images/intern.jpg' />
                    </div>
                    <div className='md:w-full w-[97%] mx-auto flex flex-col gap-6 '>
                        <h1 className='head3 font-bold text-3xl'>Intrenship For Himgyan Tech</h1>
                        <div className='head3 flex flex-col gap-2'>
                            <h2 className=' font-bold text-lg'>Intrenship Started Himgyan Tech 2025</h2>
                            <p>Himgyan Tech Pvt. Ltd. is a professional Digital Marketing, Website Design and Development company based in Badarpur, India.</p>
                            <p>The ideal candidate should have experience working with modern frontend technologies and be comfortable building applications for both web and used Php, javascript and SQL.</p>
                        </div>
                        <div className='head3 flex flex-col gap-1'>
                            <h2 className='font-bold text-lg'>Front-End Developer Intern</h2>
                            <p>We're looking for a recent graduate & Undergraduate with basic HTML, CSS, and JavaScript skills to join our team as a Front-End Web Development Intern. If you're eager to learn and grow, we'd love to hear from you!</p>
                        </div>
                        <div className='head3 flex flex-col gap-1'>
                            <h2 className='font-bold text-lg'>Web Developer Intern</h2>
                            <p>Himgyan Tech IT software company dedicated to delivering innovative software solutions to our clients. We are looking for motivated and enthusiastic freshers, college students, and job seekers to join our dynamic team as Web Developer Interns. This is a fantastic opportunity to gain hands-on experience in web development and work on real projects that will enhance your skills and portfolio.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Internship
