import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

export default function Hero () {
    return (
        <div name="home" className='w-full h-screen bg-[#08172f]'>

            {/* Container */}
            <div className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Aman kumar</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Engineer,</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a Software Engineer with a strong inclination 
                    towards Blockchain development, DeFi, and FullStack.
                    Leveraging my expertise in distributed ledger
                    technologies, I am passionate about creating innovative
                    solutions that not only harness the power of decentralized systems but
                    also integrate seamlessly into full-stack applications.</p>
                <div>
                    <Link
                        to="work"
                        smooth={true}
                        duration={500}
                        >
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                        </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}