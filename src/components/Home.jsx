import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";
const Home = () => {
  return (
   <>
   <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
    <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>welcome to my feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>I'm a </h1>
            
           < ReactTyped
           className='text-red-600 font-bold'
          strings={["Full Stack Developer","Programmer","Tech Enthusiast","Problem solver"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className='text-sm md:text-sm text-justify'>Transforming ideas into scalable web apps with code, creativity, and curiosity. I specialize in full-stack development using the MERN stack and love building real-time, user-friendly, and smart solutions. With a strong DSA foundation and a passion for clean UI, I turn complex problems into elegant code.</p>
        <br />
        <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
          <div className='space-y-2'>
          <h1 className='font-bold'>available on</h1>
          <ul className='flex space-x-5'>
            
            <li>
              <a href="https://www.linkedin.com/in/md-saquib-anjum-khan-414510254/" target='_blank'> <FaLinkedin className='text-2xl cursor-pointer' /></a>
             </li>
            <li>
              <a href="https://github.com/SaquibAnjum" target='_blank'> <FaGithubSquare className='text-2xl cursor-pointer' /></a>
             </li>
            <li>
              <a href="https://leetcode.com/u/saquib-anjum-khan/" target='_blank'><SiLeetcode className='text-2xl cursor-pointer' /></a>
               </li>
          </ul>
        </div>
        <div>
           <div className='space-y-2'>
          <h1 className='font-bold'>Currently working on</h1>
          <ul className='flex space-x-5'>
            <li><DiMongodb className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full' /></li>
            <li><SiExpress  className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full' /></li>
            <li> <FaNodeJs className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full' /></li>
            <li> <FaReact className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full' /></li>
          </ul>
        </div>
        </div>
        </div>
        </div>
        
        <div className='md:w-1/2 md:mt-20 mt-8 md:ml-48 order-1'>
        <img src="https://img.freepik.com/premium-photo/hacker-hacker-photo-cyber-crime-coding-photo-boy-coding-hacker-computer-hacking-hacking-pho_860112-881.jpg" className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
        </div>
    </div>
   </div>
   <hr />
   </>
  )
}

export default Home;
