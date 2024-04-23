import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
         <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
            <button className='absolute px-5 py-1  border-2 rounded-full left-10 bottom-10 text-[#CDEA68]'>&copy;2019-2024</button>
         </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[50vh] '>
            <div className='card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#373a39]'>
               <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
               <button className='absolute px-5 py-1  border-2 rounded-full left-10 bottom-10 text-[#F1F1F1]'>Rating 5.0 on Designs</button>
            </div>
            <div className='card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#373a39]'>
                <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
                <button className='absolute px-5 py-1  border-2 rounded-full left-10 bottom-10 text-[#F1F1F1]'>Alumni</button>
            </div>
      </div>
    </div>
  )
}

export default Cards
