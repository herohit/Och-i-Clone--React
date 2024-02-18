import { animate, motion, useAnimation, } from 'framer-motion'
import React from 'react'

const Featured = () => {
    const cards = [useAnimation(), useAnimation()];
    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (
        <div className='w-full py-20'>
            <div className='full px-20 border-b-[1px] pb-20 border-zinc-700'>
                <h1 style={{ fontFamily: 'Neue' }} className='text-8xl tracking-tight'>Featured projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full mt-10 flex gap-20">
                    <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="cardcontainer relative  w-1/2 h-[70vh]">
                        <h1 style={{ fontFamily: 'FounderGrotesk' }} className='absolute flex overflow-hidden z-[9] text-8xl leading-none tracking-tight left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#cdea68]'>
                            {"FYDE".split('').map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block' key={index} >{item}</motion.span>))}
                        </h1>
                        <div className="card w-full h-full  rounded-xl overflow-hidden" >
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </motion.div>


                    <div className="cardcontainer relative  w-1/2 h-[70vh]">
                        <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)}
                            className="card w-full h-full  rounded-xl  overflow-hidden" >
                            <h1 style={{ fontFamily: 'FounderGrotesk' }} className='flex overflow-hidden absolute z-[9] text-8xl leading-none tracking-tight right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#cdea68]'>
                                {"VISE".split('').map((item, index) => (<motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block' key={index} >{item}</motion.span>))}
                            </h1>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured