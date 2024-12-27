import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.2" className='w-full bg-[#004d43] py-20 rounded-tl-3xl rounded-tr-3xl' >
        <div className='flex py-10 overflow-hidden border-t-2 border-b-2 whitespace-nowrap border-zinc-300'>
            <motion.h1 initial={{x : "0"}} animate={{x : "-100%"}} transition={{repeat:Infinity, ease : "linear", duration: 7}} className='text-[16vw] font-bold leading-none uppercase tracking-tighter px-5'>
                We are Ochi
            </motion.h1>
            <motion.h1 initial={{x : "0"}} animate={{x : "-100%"}} transition={{repeat:Infinity, ease : "linear", duration: 7}} className='text-[16vw] font-bold tracking-tighter leading-none uppercase px-5'>
                We are Ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee