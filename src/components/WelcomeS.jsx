import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WelcomeS = () => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.head', {
                scrollTrigger: {
                    trigger: '.hell',
                    start: 'top 80%',
                  
                },
                x: -800,
                opacity: 0,
                duration: 2,
                ease: 'power3.out',
                stagger: 1
            });
        });

        return () => ctx.revert(); // 🧹 Cleanup on unmount
    }, []);

    useLayoutEffect(() => {
        const ctx2 = gsap.context(() => {
            gsap.from('.head2', {
                scrollTrigger: {
                    trigger: '.hell2',
                    start: 'top 80%',
                  
                },
                x: 800,
                delay:1,
                opacity: 0,
                duration: 2,
                ease: 'power3.out',
                stagger: 1
            });
        });

        return () => ctx2.revert(); // 🧹 Cleanup on unmount
    }, []);


    return (
        <div className='w-full md:mt-[-35px] mt-[100px] bg-[#ffffff9b] overflow-x-hidden flex flex-col gap-8 h-fit'>
            <div className='flex flex-col items-center gap-4 md:w-[80%] w-[95%] mx-auto text-center hell'>
                <h2 className='text-3xl font-bold headingForAnimation relative z-10'>
                    Welcome To Himgyan Tech
                </h2>
                <p className='head relative '>
                    Himgyan Tech Pvt. Ltd. is a professional Digital Marketing, Website Design and Development company based in Badarpur, India.
                </p>
                <p className='head '>
                    Himgyan Tech provides IT Solutions for individuals, industries, or businesses to improve productivity, reduce costs, and grow in today’s competitive market.
                </p>
            </div>

            <div className='md:w-[80%] mx-auto gap-6 grid md:grid-cols-[30%_70%]'>
                <div className='md:w-full h-full'>
                    <img
                        className='md:h-full md:w-full mx-auto'
                        src='images/pranav.jpg'
                        alt='Team Member'
                    />
                </div>

                <div className='w-full flex flex-col gap-8 justify-center hell2'>
                    <div className='md:w-[80%] head2 mx-auto flex w-[95%] flex-col gap-4 items-center'>
                        <h6 className='text-3xl font-medium italic text-primary'>Our Mission</h6>
                        <p>
                            To provide IT Solutions for individuals, industries, or businesses to improve productivity, reduce costs, and achieve sustainable growth.
                        </p>
                    </div>

                    <div className='md:w-[80%] head2 mx-auto flex w-[95%] flex-col gap-4 items-center'>
                        <h6 className='text-3xl font-medium italic text-primary'>Our Vision</h6>
                        <p>
                            To be a leading IT Solutions provider in the region, known for our innovative approach and commitment to excellence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeS;
