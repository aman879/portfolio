import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { SiMinutemailer } from "react-icons/si";

export default function Contact() {
    return (
        <div name="contact" className="w-full h-screen bg-[#08172f]">
            <div className="sm:max-w-[1000px] mx-auto sm:p-[150px] sm:pt-[100px] p-8 flex flex-col justify-center h-full md:h-auto contact-container">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-200">Contact</p>
                </div>
                <div className='grid grid-rows-2 gap-[27px] py-5'>
                    <div className="grid grid-cols-2 gap-4">
                        <div>                        
                            <span className="text-2xl font-bold flex items-center text-[#000000]"><FaGithub className="mr-2" size={30}/>GitHub</span>
                            <a className="text-base font-semibold text-[#fefefe] inline border-b-2 border-yellow-50" href='https://github.com/aman879' target='_blank' rel='noreferrer'>aman879</a>
                        </div>
                        <div>                        
                            <span className="text-2xl font-bold flex items-center text-[#000000]"><FaLinkedin className="mr-2" size={30}/>LinkedIn</span>
                            <a className="text-base font-semibold text-[#fefefe] inline border-b-2 border-yellow-50" href='https://www.linkedin.com/in/aman-kumar-b3a293238/' target='_blank' rel='noreferrer'>Aman kumar</a>
                        </div>
                        <div>                        
                            <span className="text-2xl font-bold flex items-center text-[#000000]"><SiMinutemailer className="mr-2" size={30}/>Email</span>
                            <a className="text-base font-semibold text-[#fefefe] inline border-b-2 border-yellow-50" href='mailto:aman9693kumar@gmail.com'>aman9693kumar@gmail.com</a>
                        </div>
                    </div>
                    <div className='grid grid-rows-2'>
                        <div>
                            <p className='text-xl font-semibold'>Phone Number</p>
                            <span>+918252136010</span>
                        </div>
                        <div className='mt-[-30px]'>
                            <p className='text-xl font-semibold'>Address</p>
                            <p>Hummad gali,</p>
                            <p>Nehru tola</p>
                            <p>Patna city 800009</p>
                            <p>Patna, Bihar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}