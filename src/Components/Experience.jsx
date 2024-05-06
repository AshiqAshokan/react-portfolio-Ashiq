import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='mt-20'>
      <motion.h1 
      whileInView={{ opacity:1, y:0 }}
      initial={{ opacity:0, y:-100 }}
      transition={{ duration:0.5 }}
      className='text-center text-4xl text-white mb-10'>Experiences</motion.h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 md:mx-20'>
        <motion.div 
        whileInView={{ opacity:1, x:0 }}
        initial={{ opacity:0, x:-100 }}
        transition={{ duration:1 }}
        className='w-full flex'>
          
            <h1 className='text-4xl text-white mt-20'>2023-present</h1>
          
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity: 0, x:100 }}
        transition={{ duration:1 }}
        className='w-full flex justify-center items-center'>
          <div>
            <h1 className='text-2xl text-white font-bold mt-10 mb-4'>Mern Stack Developer</h1>
            <p className='font-light text-slate-200 tracking-tighter mb-4'>As a Software Development Intern at Softzne Solutions, I actively contributed to various stages of the software development lifecycle while gaining valuable hands-on experience in a professional environment.</p>
            <div className='flex flex-wrap'>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Mongodb</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Express</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>React</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Node js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
