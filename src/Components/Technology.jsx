import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVariants = (duration)=> ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technology = () => {
  return (
    <div>
      <motion.h1 
      whileInView={{ opacity:1, y:0 }}
      initial={{ opacity:0, y:-100 }}
      transition={ { duration:1.5 } }
      className='text-center text-4xl text-white mb-10'>Technologies</motion.h1>
      <motion.div 
      whileInView={{ opacity:1, x:0 }}
      initial={{ opacity:0, x:-100 }}
      transition={{ duration: 1.5 }}
      className='flex justify-center items-center gap-4 flex-wrap'>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaReact className='text-3xl text-cyan-400'/>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-3xl text-green-400'/>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-3xl text-cyan-400'/>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiMongodb className='text-3xl text-green-400'/>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiMysql className='text-3xl text-orange-400'/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
