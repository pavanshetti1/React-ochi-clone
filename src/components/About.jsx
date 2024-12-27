import { div } from 'framer-motion/client'
import React from 'react'

function About() {
  return (
    <div className='w-full bg-[#CDEA68]'>
        <div className='w-full bg-[#CDEA68] text-black p-20 rounded-tl-3xl rounded-tr-3xl'>
            <h1 className="text-[5vw] font-['Neue_Montreal'] tracking-tight leading-[5vw]"> Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

        </div>
        <div className='w-full  border-t-[2px] border-[#91a34e] mt-10 p-10 flex '>
            <div className='w-1/2 '>
                <h1 className='text-6xl text-black'>Our approach:</h1>
                <button class="mt-5  px-10 py-3 bg-zinc-900  rounded-full flex gap-5 items-center">Read More
                    <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                </button>
            </div>

            <div className='w-1/2 bg-[#96ab4c] h-[60vh] rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About