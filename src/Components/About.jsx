import React from 'react';
import about from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
        <motion.div
          whileInView={{ opacity:1, y:0 }}
          initial={{ opacity:0, y:-100 }}
          transition={ { duration:1.5 } }
         className='w-full flex justify-center items-center mb-8'>
            <h1 className="text-4xl sm:text-5xl md:text-6xl  tracking-tight text-gray-400 mt-8">
                About<span className="text-pink-500">Me</span>
            </h1>
        </motion.div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-20 md:mx-20'>
            <motion.div
            whileInView={{ opacity:1, x:0 }}
            initial={{ opacity:0, x: -100 }}
            transition={{ duration: 0.5 }}
             className='w-full  flex justify-center items-center lg:justify-start'>
                <div className="max-w-md rounded overflow-hidden">
                    <img src={about} alt='profilepic' />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity:0, x:100 }}
            transition={{ duration: 0.5 }}
            className='w-full mx-auto md:mt-20 lg:mt-0 '>
                <div className="">
                    <p className=' font-light text-slate-200 tracking-tighter'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default About;
