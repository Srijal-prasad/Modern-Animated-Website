import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
  const [isHoveringFirst, setHoveringFirst] = useState(false);
  const [isHoveringSecond, setHoveringSecond] = useState(false);

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-20'>
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
          <div
            onMouseEnter={() => setHoveringFirst(true)}
            onMouseLeave={() => setHoveringFirst(false)}
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            {isHoveringFirst && (
              <motion.h1
                initial={{ y: "100%" }}
                animate={isHoveringFirst ? { y: "0" } : { y: "100%" }}
                transition={{ ease: "linear", duration: 0.5 }}
                className='absolute text-[#CDEA68] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-8xl tracking-tighter leading-none font-["Founders_Grotesk_X-Condensed"]'
              >
                PREMIUM
              </motion.h1>
            )}
            <div className=' card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png' alt='' />
            </div>
          </div>
          <div
            onMouseEnter={() => setHoveringSecond(true)}
            onMouseLeave={() => setHoveringSecond(false)}
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            {isHoveringSecond && (
              <motion.h1
                initial={{ y: "100%" }}
                animate={isHoveringSecond ? { y: "0" } : { y: "100%" }}
                transition={{ ease: "linear", duration: 0.5 }}
                className='absolute text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-8xl tracking-tighter leading-none font-["Founders_Grotesk_X-Condensed"]'
              >
                FYDE
              </motion.h1>
            )}
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
