

export default function Skills() {
    return (
        <div name='skills' className="w-full md:h-screen md:mb-0 h-auto bg-[#08172f] text-gray-200">
            {/* Container */}
            <div className="flex flex-col justify-center items-center">
                <div className="mt-[100px]">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                    <p className="py-4">// These are the technologies I've worked with</p>
                </div>
                <div className="mt-5 grid md:grid-cols-3 grid-rows-3 gap-8">
                    <div className="md:h-[40vh] md:w-[43vh] h-[35vh] w-[43vh] bg-gray-900 rounded-2xl shadow-md shadow-[#040c16]">
                        <div className="flex justify-center mt-8">
                            <p className="text-2xl">Frontend</p>
                        </div>
                        <div className="p-2 pt-8 text-center">
                            <button className="link cursor-default mr-4">Javascript</button>
                            <button className="link cursor-default">HTML</button>
                            <button className="link mr-4 cursor-default">CSS</button>
                            <button className="link cursor-default">React</button>
                            <button className="link cursor-default ml-3">Next.js</button>
                            <button className="link cursor-default ml-4">web3.js</button>
                        </div>
                    </div>                    
                    <div className="md:h-[40vh] md:w-[43vh] h-[35vh] w-[43vh] bg-gray-900 rounded-2xl shadow-md shadow-[#040c16]">
                        <div className="flex justify-center mt-8">
                            <p className="text-2xl">Backend</p>
                        </div>
                        <div className="p-2 pt-8 text-center">
                            <button className="link cursor-default mr-2">Node.js</button>
                            <button className="link cursor-default">Express.js</button>
                            <button className="link cursor-default ml-3 mr-3">Smart Contract</button>
                            <button className="link cursor-default ml-4 mr-4">Postgresql</button>
                        </div>
                    </div>                    
                    <div className="md:h-[40vh] md:w-[43vh] h-[35vh] w-[43vh] bg-gray-900 rounded-2xl shadow-md shadow-[#040c16]">
                        <div className="flex justify-center mt-8">
                            <p className="text-2xl">Tech skills</p>
                        </div>
                        <div className="p-2 pt-8 text-center">
                            <button className="link cursor-default mr-3">Java</button>
                            <button className="link cursor-default">c</button>
                            <button className="link cursor-default ml-3">Solidity</button>
                            <button className="link cursor-default ">Ethereum Blockchain</button>
                            <button className="link cursor-default ">Docker</button>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}