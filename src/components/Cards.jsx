import React from 'react'

function Cards() {
  return (
    <div className='flex items-center w-full gap-10 px-20 py-10'>
        <div className="relative w-1/2 cardcontainer h-[50vh] bg-[#004D43] rounded-lg flex justify-center items-center">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" srcset="" />
            <button className='absolute px-5 py-2 border-2 rounded-full bottom-10 left-10 border-zinc-400'>&copy;2019-2022</button>
        </div>
        <div className="flex gap-5 w-1/2 h-[50vh] cardcontainer">
            <div className='relative flex items-center justify-center w-1/2 rounded-lg bg-zinc-800' > 
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" srcset="" />
                <button className='absolute px-5 py-2 uppercase border-2 rounded-full bottom-10 left-10 border-zinc-700'>Rating 5.0 on Clutch</button>
            </div>
            
            <div className='relative flex items-center justify-center w-1/2 rounded-lg bg-zinc-800' > 
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" srcset="" />
                <button className='absolute px-5 py-2 uppercase border-2 rounded-full bottom-10 left-10 border-zinc-700'>Business BOotcap alumini</button>
            </div>
           
        </div>

    </div>
  )
}

export default Cards