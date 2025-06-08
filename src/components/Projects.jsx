
import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
import CountUp from 'react-countup';



const Projects = () => {
    const projectsImg = [
        '/images/kcs.png',
        '/images/jindal.png',
        '/images/20-Simple-Business-Ideas-For-Programmers-1.jpg',
        '/images/what-is-a-coding-project.webp',
        '/images/20-Simple-Business-Ideas-For-Programmers-1.jpg',
        'images/rkn.png'
    ];
    useLayoutEffect(() => {
        const ctx4 = gsap.context(() => {
            gsap.from('.head4', {
                scrollTrigger: {
                    trigger: '.hell4',
                    start: 'top 80%',
                  
                },
                x: 800,
                delay: 0.5,
                opacity: 0,
                duration: 1.5,
                ease: 'power3.out',
                stagger: 1
            });
        });

        return () => ctx4.revert(); // 🧹 Cleanup on unmount
    }, []);

    return (
        <div className='overflow-x-hidden'>
            <div className=' mt-4 flex flex-col items-center hell4 md:w-[85%] w-[95%] pb-16 mx-auto'>
                <h1 className=' relative text-3xl font-semibold headingForAnimation'>Our Projects</h1>
                <div className=' grid lg:grid-cols-3 head4 md:grid-cols-2 gap-6 mt-12'>
                    {projectsImg.map((img, index) => (
                        <div key={index} className='rounded-2xl relative cardForAnimation shadow-md shadow-[#000000db] z-10 h-[180px]  overflow-hidden'>
                            <img className=' w-full h-full' src={img} alt={`Project ${index + 1}`} />
                            <button className='text-lg absolute top-[50%] z-30 left-[50%] transform -translate-1/2 rounded border-2 px-8 py-1 text-white cursor-pointer opacity-0 btn_animation'>Know More</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full h-screen relative z-10 bg-[url("/images/banner.jpg")] bg-fixed bg-cover bg-center  bg-no-repeat grid md:grid-cols-4 grid-cols-1 items-center'>
                <div className='absolute inset-0 z-20 bg-[#000000af]'> </div>
                <div className=' w-full text-white relatve z-30  flex flex-col items-center border-r border-gray-400 gap-4 py-8'>
                    <div className='border-red-500  '>
                        <svg fill="#a30b29" width="54px" height="54px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="#a30b29"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 2L7 7L2 7L2 46L14 46L14 44L4 44L4 9L9 9L9 4L29 4L29 7L11 7L11 9L34 9L34 20L36 20L36 7L31 7L31 2 Z M 8 12L8 14L12 14L12 12 Z M 17 12L17 14L21 14L21 12 Z M 26 12L26 14L30 14L30 12 Z M 8 17L8 19L12 19L12 17 Z M 17 17L17 19L21 19L21 17 Z M 26 17L26 19L30 19L30 17 Z M 29 20C25.742188 20 23.328125 21.324219 22.074219 23.296875C20.929688 25.09375 20.875 27.339844 21.59375 29.433594C21.515625 29.566406 21.402344 29.679688 21.328125 29.839844C21.171875 30.191406 21.035156 30.589844 21.054688 31.097656L21.054688 31.101563C21.109375 32.378906 21.851563 33.046875 22.398438 33.421875C22.628906 34.640625 23.207031 35.660156 24 36.390625L24 38.53125C23.824219 38.953125 23.472656 39.308594 22.796875 39.679688C22.089844 40.070313 21.132813 40.4375 20.144531 40.917969C19.15625 41.398438 18.125 42.011719 17.324219 42.988281C16.519531 43.96875 16 45.308594 16 47L16 48L48.050781 48L47.992188 46.941406C47.902344 45.363281 47.316406 44.117188 46.488281 43.222656C45.664063 42.328125 44.644531 41.765625 43.679688 41.320313C42.714844 40.875 41.785156 40.535156 41.109375 40.171875C40.464844 39.832031 40.148438 39.511719 40 39.160156L40 37.472656C40.597656 36.609375 40.859375 35.617188 40.9375 34.6875C41.414063 34.265625 41.96875 33.617188 42.125 32.457031C42.230469 31.625 42.019531 30.996094 41.695313 30.464844C42.144531 29.277344 42.328125 27.84375 41.933594 26.417969C41.707031 25.589844 41.277344 24.777344 40.5625 24.171875C40.003906 23.691406 39.238281 23.425781 38.390625 23.308594L37.75 22L37.125 22C36.097656 22 35.085938 22.238281 34.214844 22.578125C33.871094 22.714844 33.558594 22.863281 33.265625 23.027344C33.101563 22.808594 32.921875 22.601563 32.714844 22.414063C32.105469 21.863281 31.261719 21.550781 30.324219 21.421875L29.621094 20 Z M 8 22L8 24L12 24L12 22 Z M 17 22L17 24L19.484375 24L20.761719 22 Z M 28.4375 22.113281L29.027344 23.300781L29.644531 23.300781C30.464844 23.300781 30.96875 23.535156 31.371094 23.894531C31.773438 24.257813 32.066406 24.796875 32.238281 25.429688C32.582031 26.695313 32.289063 28.339844 32.007813 28.792969L31.644531 29.371094L32.050781 29.921875C32.289063 30.238281 32.441406 30.566406 32.363281 31.007813C32.253906 31.625 32.03125 31.707031 31.589844 32.089844L31.257813 32.375L31.246094 32.8125C31.210938 33.792969 30.871094 34.777344 30.300781 35.339844L30 35.632813L30 38.988281L30.058594 39.152344C30.453125 40.25 31.335938 40.933594 32.234375 41.429688C33.132813 41.925781 34.101563 42.289063 34.976563 42.714844C35.851563 43.140625 36.609375 43.625 37.132813 44.261719C37.496094 44.699219 37.71875 45.289063 37.855469 46L18.144531 46C18.28125 45.289063 18.503906 44.699219 18.867188 44.261719C19.390625 43.625 20.148438 43.140625 21.023438 42.714844C21.898438 42.289063 22.867188 41.925781 23.765625 41.429688C24.664063 40.933594 25.546875 40.25 25.941406 39.152344L26 38.988281L26 35.523438L25.5625 35.226563C25.101563 34.914063 24.34375 33.769531 24.238281 32.742188L24.183594 32.1875L23.683594 31.945313C23.398438 31.808594 23.082031 31.753906 23.050781 31.015625C23.050781 31.015625 23.082031 30.824219 23.15625 30.65625C23.234375 30.484375 23.375 30.304688 23.332031 30.347656L23.8125 29.867188L23.542969 29.242188C22.796875 27.523438 22.898438 25.722656 23.761719 24.367188C24.550781 23.125 26.097656 22.269531 28.4375 22.113281 Z M 36.558594 24.113281L37.089844 25.199219L37.714844 25.199219C38.472656 25.199219 38.921875 25.398438 39.265625 25.691406C39.613281 25.984375 39.859375 26.414063 40.003906 26.949219C40.300781 28.019531 40.085938 29.480469 39.746094 30.144531L39.417969 30.796875L39.933594 31.308594C39.867188 31.242188 40.195313 31.785156 40.140625 32.195313C40.011719 33.175781 39.871094 33.113281 39.449219 33.390625L39.03125 33.667969L39 34.171875C38.953125 35.042969 38.515625 36.351563 38.28125 36.589844L38 36.878906L38 39.621094L38.058594 39.78125C38.4375 40.835938 39.296875 41.476563 40.167969 41.9375C41.035156 42.398438 41.980469 42.738281 42.84375 43.136719C43.707031 43.535156 44.476563 43.984375 45.019531 44.578125C45.367188 44.953125 45.601563 45.433594 45.769531 46L39.921875 46C39.757813 44.777344 39.3125 43.765625 38.675781 42.988281C37.875 42.011719 36.84375 41.398438 35.855469 40.917969C34.867188 40.4375 33.910156 40.070313 33.203125 39.679688C32.527344 39.308594 32.175781 38.953125 32 38.53125L32 36.296875C32.691406 35.421875 33.054688 34.390625 33.15625 33.34375C33.542969 33.003906 34.144531 32.417969 34.332031 31.359375C34.484375 30.492188 34.226563 29.785156 33.90625 29.210938C34.4375 27.988281 34.59375 26.460938 34.167969 24.902344C34.164063 24.886719 34.15625 24.871094 34.152344 24.855469C34.367188 24.71875 34.640625 24.5625 34.949219 24.441406C35.4375 24.25 36.007813 24.179688 36.558594 24.113281 Z M 8 27L8 29L12 29L12 27 Z M 17 27L17 29L19.753906 29L19.394531 27 Z M 8 32L8 34L12 34L12 32 Z M 17 32L17 34L20.449219 34L19.613281 32 Z M 8 37L8 39L12 39L12 37 Z M 17 37L17 39L21 39L21 37Z"></path></g></svg>
                    </div>
                    <div className='text-3xl text-center'><CountUp scrollSpyDelay={1000} end={1000} enableScrollSpy />+ <br /> Companies</div>
                </div>
                <div className=' w-full text-white relatve z-30  flex flex-col items-center border-r border-gray-400 gap-4 py-8'>
                    <div className='border-red-500  '>
                        <svg width="54px" height="54px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a30b29" stroke="#a30b29"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="navigation-nw"> <polyline fill="none" points="2.5 2.5 10.2 21.5 14.4 14.4 21.5 10.2 2.5 2.5" stroke="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> </g> </g> </g></svg>
                    </div>
                    <div className='text-3xl text-center'><CountUp scrollSpyDelay={1000} end={20} enableScrollSpy />+ <br /> Branches</div>
                </div>
                <div className=' w-full text-white relatve z-30  flex flex-col items-center border-r border-gray-400 gap-4 py-8'>
                    <div className='border-red-500  '>
                        <svg fill="#a30b29" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" width="54px" height="54px" stroke="#a30b29"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M512,412.098V24.976H0v387.122h187.317v37.463H143.61v37.463H368.39v-37.463h-43.707v-37.463H512z M37.463,62.439h437.073 v237.268H37.463V62.439z M287.219,449.561h-62.439v-37.463h62.439V449.561z M37.463,374.634v-37.463h437.073v37.463H37.463z"></path> </g> </g> <g> <g> <rect x="274.732" y="131.122" width="37.463" height="124.878"></rect> </g> </g> <g> <g> <rect x="349.659" y="106.146" width="37.463" height="149.854"></rect> </g> </g> <g> <g> <rect x="199.805" y="156.098" width="37.463" height="99.902"></rect> </g> </g> <g> <g> <rect x="124.878" y="181.073" width="37.463" height="74.927"></rect> </g> </g> </g></svg>
                    </div>
                    <div className='text-3xl text-center'><CountUp scrollSpyDelay={1000} end={1500} enableScrollSpy />+ <br /> Projects</div>
                </div>
                <div className=' w-full text-white relatve z-30  flex flex-col items-center  gap-4 py-8'>
                    <div className='border-red-500  '>
                        <svg width="54px" height="54px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#a30b29" stroke="#a30b29" strokeWidth="0.00017"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 8h1c0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5h1c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5zM7.5 6.5c0.553 0 1-0.447 1-1s-0.447-1-1-1-1 0.447-1 1 0.447 1 1 1zM11.5 6.5c0.553 0 1-0.447 1-1s-0.447-1-1-1-1 0.447-1 1 0.447 1 1 1zM17 7.5c0 4.136-3.364 7.5-7.5 7.5-1.34 0-2.648-0.359-3.803-1.041l-5.5 2.843 2.843-5.499c-0.681-1.155-1.040-2.463-1.040-3.803 0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5zM16 7.5c0-3.584-2.916-6.5-6.5-6.5s-6.5 2.916-6.5 6.5c0 1.244 0.358 2.459 1.036 3.511l0.157 0.243-1.664 3.218 3.217-1.664 0.243 0.157c1.053 0.677 2.266 1.035 3.511 1.035 3.584 0 6.5-2.916 6.5-6.5z" fill=""></path> </g></svg>
                    </div>
                    <div className='text-3xl text-center' > <CountUp delay={2000} scrollSpyDelay={1000} end={1200} enableScrollSpy />+ <br /> Comments</div>
                </div>

            </div>
        </div>
    )
}

export default Projects
