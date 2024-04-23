import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        we creates the visual layout and graphic design of a presentation. 
        we have an understanding of many different types of media, 
        such as PowerPoint, Google Slides, and Keynote.  
      </h1>
     <div className='w-full flex gap-5 border-t-[1px] pt-10  mt-20 border-[#a1b562]'>
        <div className='w-1/2 '>
            <h1 className='text-7xl'>Our approach: </h1>
            <button className='uppercase flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[#92a061] relative'>
            <div className="absolute inset-0 bg-no-repeat bg-center bg-cover rounded-3xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByZXNlbnRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D')" }}></div>
       </div>
     </div>
    </div>
  )
}

export default About

