import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
    const maskerText = ['We Create', 'Eye Opening', 'Presentations'];
    const bottomText = ['For public and private companies', 'From the first pitch to IPO']
    return (
        <div data-scroll data-scroll-speed='-.3' className=' w-full h-screen bg-zinc-900 pt-1'>
            <div className='text-structure mt-52 px-20'>
                {maskerText.map((item, index) => (
                    <div key={index} className="masker " style={{ fontFamily: 'FounderGrotesk' }}>
                        <div className='w-fit flex items-center overflow-hidden'>
                            {index === 1 && (<motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '9vw' }}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                className='w-[9vw] h-[5vw] bg-[url("https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]   bg-cover relative top-[0.5vw] rounded-md  mr-3'></motion.div>)}
                            <h1 className='uppercase text-[8vw] leading-[6.5vw] '>{item}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className='border-t-[1px] border-zinc-500 mt-20 flex justify-between items-center py-5 px-20' >
                {bottomText.map((item, index) => (
                    <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className='cursor-pointer px-5 py-2 border-[1px] bprder-zinc-500 rounded-full font-light text-md uppercase'>start the project</div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] bprder-zinc-500 ">
                        <span className='cursor-pointer rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage