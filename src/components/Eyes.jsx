import React, {useEffect, useState} from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect( () =>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            
            setRotate(angle - 180);
        })
    })
    
  return (
    <div className='w-full h-screen overflow-hidden eyes' >
        <div data-scroll data-scroll-speed="-.6" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div className='flex gap-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                    <div className='relative w-2/3 rounded-full h-2/3 bg-zinc-900 '>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="absolute w-full h-10 line top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                            <div className='w-10 h-10 rounded-full bg-zinc-100'></div>    
                        </div>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center '>
                <div className='relative w-2/3 rounded-full h-2/3 bg-zinc-900 '>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="absolute w-full h-10 line top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                            <div className='w-10 h-10 rounded-full bg-zinc-100'></div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes