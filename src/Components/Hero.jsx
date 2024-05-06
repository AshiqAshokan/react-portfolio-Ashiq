import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilepic from '../assets/appu.jpg';
import { motion } from "framer-motion"
const container=(delay)=>({
   hidden:{ x:-100, opacity:0 },
   visible:{
    x:0,
    opacity:1,
    transition:{ duration:0.5, delay:delay}
   }
})
const Hero = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-4 mb-20 md:mx-10'>
      <div className='w-full md:mt-20'>
        <div className="md:px-4">
          <motion.h1 
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className='pb-5 text-4xl sm:text-5xl md:text-6xl font-thin tracking-tight text-white'>Ashiq Asokan</motion.h1>
          <motion.span
             variants={container(0.5)}
             initial="hidden"
             animate="visible" 
          className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl tracking-tight text-transparent'>
            Full Stack Developer
            </motion.span>
          <motion.p 
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className='my-2 py-6 font-light text-slate-200 tracking-tighter'>{HERO_CONTENT}</motion.p>
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className="max-w-md mx-auto">
          <motion.img 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x:0, opacity:1 }}
          transition={{ duration: 1, delay:1.2}}
          src={profilepic} alt='profilepic' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
