
import { motion, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) =>{
        cards[index].start({ y : '0'});
    }

    const handleHoverEnd = (index) =>{
        cards[index].start({ y : '100%'});
    }


  return (
    <div className='w-full py-20'>
        <div className='w-full px-10 pb-12 border-b-[1px] border-zinc-600 '>
            <h1 className='tracking-tight text-7xl'>Featured projects</h1>
        </div>

        <div className="px-20">
            <div className='flex w-full gap-10 mt-10 ' >
                <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='w-1/2 h-[80vh] relative cardcontainer '>
                    <h1 className='text-[#CDEA68] flex leading-none overflow-hidden absolute font-semibold tracking-tight -translate-x-1/2 -translate-y-1/2 z-[9] left-full text-8xl top-1/2'>
                        {"FYDE".split('').map((item, index) => 
                        <motion.span initial={{y : "100%"}} animate={cards[1]} 
                            transition={{ease : [0.83, 0, 0.17, 1], delay: index * 0.05}}
                        className='inline-block'>{item}</motion.span>)}
                    </h1>
                    <div className="w-full h-full 0 card rounded-xl">
                        <img className='w-full h-full bg-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" srcset="" />
                    </div>
                </motion.div>
                <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)}  className='w-1/2 h-[80vh] relative  cardcontainer '>
                <h1 className='text-[#CDEA68] leading-none overflow-hidden flex absolute font-semibold tracking-tight translate-x-1/2 -translate-y-1/2 z-[9] right-full text-8xl top-1/2'>
                     {"VISE".split('').map((item, index) => 
                        <motion.span initial={{y : "100%"}} 
                            animate={cards[0]} 
                            transition={{ease : [0.83, 0, 0.17, 1], delay: index * 0.05}}
                            className='inline-block'>{item}
                        </motion.span>)
                    }
                </h1>
                    <div className="w-full h-full card rounded-xl">
                        <img className='w-full h-full bg-cover rounded-lg' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" srcset="" />
                    </div>
                </motion.div>
            </div>
        </div>
          
    </div>
  )
}

export default Featured