
import WorkImg from "../assets/projects/decMark.jpg"
import web3Faucet from "../assets/projects/webFauc.png"
import faceReco from "../assets/projects/faceRec.png"

export default function Work(){
    return(
        <div name="work" className="w-full md:h-screen bg-[#08172f] text-gray-200">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-200 border-pink-600">Work</p>
                    <p className="py-6">// Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Grid item 1 */}
                    <div 
                        style={{backgroundImage: `url(${WorkImg})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 duration-500">
                            <p className="text-2xl font-bold text-white tracking-wider">
                                Decentralized
                            </p>
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Marketplace
                            </span>
                            <div className="pt-5 text-center">
                                <a href="https://decentralized-marketplace-iota.vercel.app/" target='_blank' rel='noreferrer'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/aman879/decentralized-marketplace" target='_blank' rel='noreferrer'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid item 2 */}
                    <div 
                        style={{backgroundImage: `url(${web3Faucet})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 duration-500">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Crypto Faucet
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://web3-faucet-seven.vercel.app/" target='_blank' rel='noreferrer'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/aman879/web3Faucet" target='_blank' rel='noreferrer'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid item 3 */}
                    <div 
                        style={{backgroundImage: `url(${faceReco})`}}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 duration-500">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Face Recognition
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/aman879/face-recognition" target='_blank' rel='noreferrer'>
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}