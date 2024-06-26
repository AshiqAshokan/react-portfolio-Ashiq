import React from 'react' 
import project1 from '../assets/projects/ministore.png'
import project2 from '../assets/projects/Sindhu.png'
import project3 from '../assets/projects/apps.png'
import { motion } from 'framer-motion'


const Projects = () => {
  return (
    <div className='mt-20'>
        <motion.h1 
        whileInView={{ opacity:1, y:0 }}
        initial={{ opacity:0, y:-100 }}
        transition={{ duration:1 }} 
        className='text-center text-5xl font-bold text-white'>Projects</motion.h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 md:mx-20'>
        <motion.div
        whileInView={{ opacity:1, x:0 }}
        initial={{ opacity:0, x:-100 }}
        transition={{ duration:1 }}
         className='w-full flex justify-start mt-20 '>
                <div className="max-w-xs rounded overflow-hidden">
                    <img src={project1} alt='Ecommercepic' />
                </div>
            </motion.div>
        <motion.div 
        whileInView={{ opacity:1, x:0 }}
        initial={{ opacity:0, x:100 }}
        transition={{ duration: 1 }}
        className='w-full flex justify-center items-center'>
          <div>
            <h1 className='text-2xl text-white font-bold mt-10 mb-4'>E-commerce Website</h1>
            <p className='font-light text-slate-200 tracking-tighter mb-4'>A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.</p>
            <div className='flex flex-wrap'>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Html</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>css</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Bootstrap</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Node js</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Mysql</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 md:mx-20'>
        <motion.div 
             whileInView={{ opacity:1, x:0 }}
             initial={{ opacity:0, x:-100 }}
             transition={{ duration:1 }}
        className='w-full flex justify-start mt-20 '>
                <div className="max-w-xs rounded overflow-hidden">
                    <img src={project2} alt='Ecommercepic' />
                </div>
            </motion.div>
        <motion.div
           whileInView={{ opacity:1, x:0 }}
           initial={{ opacity:0, x:100 }}
           transition={{ duration:1 }}
         className='w-full flex justify-center items-center'>
          <div>
            <h1 className='text-2xl text-white font-bold mt-10 mb-4'>Employee Management System</h1>
            <p className='font-light text-slate-200 tracking-tighter mb-4'>A fully functional Employee Management System with features like Salary Details, Attendance Details,Company Data and user authentication.</p>
            <div className='flex flex-wrap'>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Html</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>css</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Bootstrap</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Node js</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Mongodb</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 md:mx-20'>
        <motion.div 
             whileInView={{ opacity:1, x:0 }}
             initial={{ opacity:0, x:-100 }}
             transition={{ duration:1 }}
        className='w-full flex justify-start mt-20 '>
                <div className="max-w-xs rounded overflow-hidden">
                    <img src={project3} alt='Ecommercepic' />
                </div>
            </motion.div>
        <motion.div
           whileInView={{ opacity:1, x:0 }}
           initial={{ opacity:0, x:100 }}
           transition={{ duration:1 }}
         className='w-full flex justify-center items-center'>
          <div>
            <h1 className='text-2xl text-white font-bold mt-10 mb-4'>Portfolio Website</h1>
            <p className='font-light text-slate-200 tracking-tighter mb-4'>As a passionate web Developer enthusiast, I developed portfolio to showcase my skills and accomplishments. This project serves as a comprehensive portfolio highlighting my expertise, projects, and achievements in MERN</p>
            <div className='flex flex-wrap'>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Html</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>css</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Bootstrap</span>
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
