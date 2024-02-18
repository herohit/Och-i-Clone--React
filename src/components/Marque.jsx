import React from 'react'
import { motion } from 'framer-motion';

const Marque = () => {
    return (
        <div data-scroll data-scroll-speed='.2' className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden'>
            <div className="text border-t-2 border-b-2 border-zinc-200 flex  ">
                <motion.h1 initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: 'linear', repeat: Infinity, duration: 9 }}
                    className='text-[17vw] whitespace-nowrap uppercase leading-none -mt-5 pr-20' style={{ fontFamily: 'FounderGrotesk' }}>We are ochi</motion.h1>

                <motion.h1 initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: 'linear', repeat: Infinity, duration: 9 }}
                    className='text-[17vw] whitespace-nowrap uppercase leading-none -mt-5' style={{ fontFamily: 'FounderGrotesk' }}>We are ochi</motion.h1>

            </div>
        </div >
    )
}

export default Marque