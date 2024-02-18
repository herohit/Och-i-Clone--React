import React from 'react'

const About = () => {
    return (
        <div className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black' style={{ fontFamily: 'Neue' }}>
            <h1 className='text-[4.5vw] tracking-tight leading-[4.8vw] '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>

            <div className="w-full border-t-[1px] border-[#0d0f06] mt-20 pt-20 flex gap-5">
                <div className='w-1/2'>
                    <h1 className='text-7xl'>Our approach</h1>
                    <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 uppercase'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'>
                        </div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] rounded-3xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] bg-cover'>

                </div>
            </div>
        </div>
    )
}

export default About