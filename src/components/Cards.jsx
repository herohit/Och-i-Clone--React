import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-20'>
            <div className='cardcontainer w-1/2 h-[50vh] '>
                <div className="relative card w-4/5 h-full bg-[#004d43] rounded-xl flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className="absolute left-10 bottom-10 px-5 py-3 border-2 border-zinc-100 rounded-full">&copy;2018-2022</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
                <div className="card relative w-1/2 h-full bg-[#102c28] rounded-xl flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className="absolute left-10 bottom-10 px-5 py-3 border-2 border-zinc-100 rounded-full">&copy;2018-2022</button>
                </div>
                <div className="card w-1/2 relative h-full bg-[#212121] rounded-xl flex items-center justify-center">
                    <img className='-scale-50' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className="absolute left-10 bottom-10 px-5 py-3 border-2 border-zinc-100 rounded-full">&copy;2018-2022</button>
                </div>
            </div>
        </div>
    )
}

export default Cards