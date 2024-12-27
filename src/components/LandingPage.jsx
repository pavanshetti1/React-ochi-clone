import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen pt-1 bg-zinc-900'>
        <div className="px-20 mt-40 text-structure ">
          { ["We create", "Eye Opening", "Presentations"].map( (item, index)=>{
             return <div className="masker" key={index}>
              <div className='flex w-fit'>
                {index === 1  && <motion.div initial={{width: "0"}} animate={{width: "9vw"}} transition={{ease: [0.37, 0, 0.63, 1], duration: 1}}  className='mr-2 h-[6vw] w-[9vw] bg-red-600 rounded-md relative top-[1.1vw]' > </motion.div>}
                <h1 className="uppercase text-[8vw] leading-[7vw] font-bold ">
                {item}</h1>
             </div>
              </div>
          } ) }
        
        </div>

        <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>
          { ["For public and private comapnies", "From the first pitch to IPO"].map( (item, index) => (
              <p className='tracking-tight text-md captialize'>{item}</p>
          )) }

          <div className='flex items-center gap-5 start'>
            <div className='px-5 py-1 border-2 rounded-full border-zinc-500'>Start The Project</div>
            <div className='flex items-center justify-center w-10 h-10 border-2 rounded-full border-zinc-500'> 
              <span className="rotate-[45deg]">
                <FaArrowUpLong /> 
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage