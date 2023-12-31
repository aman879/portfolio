import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { FaTwitterSquare } from "react-icons/fa";
import Logo from "../assets/logo1.png"
import { useState } from 'react'
import {Link} from 'react-scroll'

export default function Navbar(){
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleMobileLinkClick = () => setNav(false);
    console.log(nav)
    
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08172f] text-gray-200">
            <div>
                <img src={Logo} alt="Logo" style={{width: '50px'}} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="work"
                        smooth={true}
                        duration={500}
                        >
                        Work
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        >
                        Contact
                    </Link>
                </li>
            </ul>


            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {
                    !nav ?
                    <FaBars />
                    :
                    <FaTimes />
                }
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#08172f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl' >
                    <Link
                        onClick={handleMobileLinkClick}
                        to="home"
                        smooth={true}
                        duration={500}
                        >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleMobileLinkClick}
                        to="about"
                        smooth={true}
                        duration={500}
                        >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleMobileLinkClick}
                        to="skills"
                        smooth={true}
                        duration={500}
                        >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleMobileLinkClick}
                        to="work"
                        smooth={true}
                        duration={500}
                        >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link
                        onClick={handleMobileLinkClick}
                        to="contact"
                        smooth={true}
                        duration={500}
                        >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333]'>
                        <a className='flex justify-between items-center w-full text-grey-200'
                        href='https://github.com/aman879' target='_blank' rel='noreferrer'>
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-grey-200'
                        href='https://twitter.com/a_man870' target='_blank' rel='noreferrer'>
                            Twitter <FaTwitterSquare size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                        <a className='flex justify-between items-center w-full text-grey-200'
                        href='https://www.linkedin.com/in/aman-kumar-b3a293238/' target='_blank' rel='noreferrer'>
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-grey-200'
                        href='mailto:aman9693kumar@gmail.com' target='_blank' rel='noreferrer'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-grey-200'
                        href='/' target='_blank' rel='noreferrer'>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}