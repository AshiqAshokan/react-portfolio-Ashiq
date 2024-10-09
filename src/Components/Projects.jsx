import React from 'react' 
import project1 from '../assets/projects/ministore.png'
import project2 from '../assets/projects/Sindhu.png'
import project3 from '../assets/projects/apps.png'
import project4 from '../assets/projects/projects.png'
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
                    <img src={project4} alt='Collegepic' />
                </div>
            </motion.div>
        <motion.div 
        whileInView={{ opacity:1, x:0 }}
        initial={{ opacity:0, x:100 }}
        transition={{ duration: 1 }}
        className='w-full flex justify-center items-center'>
          <div>
            <h1 className='text-2xl text-white font-bold mt-10 mb-4'>Comprehensive College Management Web Application</h1>
            <p className='font-light text-slate-200 tracking-tighter mb-4'>Developed a comprehensive college management web application using the MERN stack, WebRTC, Socket.io, Razorpay, RTK Query, and Tailwind CSS. Key features include online video conferencing, real-time chat, group PTA meetings, tuition fee payments, teacher salary management, online examinations, resource sharing, and attendance tracking. Implemented secure user authentication, responsive design,</p>
            <div className='flex flex-wrap mb-5'>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>React</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Tailwind CSS</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Redux</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Node js</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Mongodb</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Socket io</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Webrtc</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Firebase</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>RazorPay</span>
            </div>
            <div className='flex items-center'>
    <p className='text-white mr-2'>Link:</p>
    <a href="https://chmm-college-1-frontend.onrender.com" className='text-white underline'>https://chmm-college-1-frontend.onrender.com</a>
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
                    <img src={project1} alt='Ecommercepic' />
                </div>
            </motion.div>
        <motion.div
           whileInView={{ opacity:1, x:0 }}
           initial={{ opacity:0, x:100 }}
           transition={{ duration:1 }}
         className='w-full flex justify-center items-center'>
          <div>
            <h1 className='text-2xl text-white font-bold mt-10 mb-4'>MiniStore Ecommerce Website</h1>
            <p className='font-light text-slate-200 tracking-tighter mb-4'>I developed a mini e-commerce website using HTML, CSS, Node.js, and SQL. The frontend offers a clean, intuitive interface, while the Node.js backend efficiently handles requests. SQL securely manages product and user data, creating a responsive and reliable shopping platform.</p>
            <div className='flex flex-wrap'>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Html</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>css</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Bootstrap</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Node Js</span>
              <span className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>Mysql</span>
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
