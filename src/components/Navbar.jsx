import React, { useState } from 'react'
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';


const Navbar = () => {
  const [menu, setmenu] = useState(false)
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-green-200 z-50'>
      <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'>
          <img src="https://media.istockphoto.com/id/1289435119/de/vektor/d%C3%BCnnes-lineart-entwickler-oder-coder-symbol-auf-wei%C3%9Fem-hintergrund.jpg?s=1024x1024&w=is&k=20&c=Peh4mGHYZHneuOeHGT0oDY_IRRaNNfhYY7YJxEZubHI=" className='h-12 w-12 rounded-full' alt="" />
          <h1 className='font-semibold text-xl cursor-pointer'>Md <span className='text-green-400 text-2xl'>Saquib</span> Anjum Khan
            <p className='text-sm'>Web Developer</p>
          </h1>
        </div>
        <div>
          <ul className='hidden md:flex space-x-7 font-bold'>
            <li className='hover:scale-105 duration-200 cursor-pointer'><Link
              to="Home"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              spy={true}
            >
              Home
            </Link>
            </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'><Link
              to="About"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              spy={true}
            >
              About
            </Link>
            </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'><Link
              to="Portfolio"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              spy={true}
            >
              Portfolio
            </Link>
            </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'><Link
              to="Experience"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              spy={true}
            >
              Experience
            </Link>
            </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'><Link
              to="Contact"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              spy={true}
            >
              Contact
            </Link>
            </li>
          </ul>

          <div onClick={() => setmenu(!menu)} className='md:hidden'>
            {menu ? <RxCross2 size={24} /> : <RiMenuFill size={24} />}
          </div>
        </div>
      </div>
      {menu && (
        <div className='bg-amber-50'>
          <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 font-bold'>
             <li className='hover:scale-105 duration-200 cursor-pointer'><Link
             onClick={() => setmenu(!menu)}
              to="Home"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              spy={true}
            >
              Home
            </Link>
            </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'><Link
            onClick={() => setmenu(!menu)}
              to="About"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              spy={true}
            >
              About
            </Link>
            </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'><Link
            onClick={() => setmenu(!menu)}
              to="Portfolio"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              spy={true}
            >
              Portfolio
            </Link>
            </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'><Link
            onClick={() => setmenu(!menu)}
              to="Experience"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              spy={true}
            >
              Experience
            </Link>
            </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'><Link
            onClick={() => setmenu(!menu)}
              to="Contact"
              smooth={true}
              duration={500}
              offset={-50}
              activeClass="active"
              spy={true}
            >
              Contact
            </Link>
            </li>
          </ul>
        </div>
      )}

    </div>
  )
}

export default Navbar
