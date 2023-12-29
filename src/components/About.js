

export default function About () {
    return (
        <div name='about' className="w-full h-screen bg-[#08172f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8"> 
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                    </div>
                <div>
                </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hii. I'm Aman, nice to meet you, Please take a look around</p>
                    </div>
                    <div>
                        <p>As an aspiring Software Engineer, my journey begins with
                            a keen interest in Blockchain, DeFi, and FullStack
                            development. Eager to explore the endless possibilities 
                            at the intersection of technology and finance, I am 
                            dedicated to learning and contributing to innovative, 
                            real-world projects. With a passion for problem-solving 
                            and a commitment to staying ahead in the dynamic tech 
                            landscape, I am excited about the potential to shape the 
                            future of software development</p>
                    </div>
                </div>
            </div>
        </div>
    )
}