import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFileDownload } from 'react-icons/fa'

const Navbars = () => {
  const handleDownload = () => {
    // Logic to download the CV PDF
    window.open('/cv/Ashiq New.pdf', '_blank');
  };
  return (
    <div className='flex justify-between items-center py-6 mb-20'>
      <div className='text-white flex items-center text-3xl m-5'>
        <h1>Aa</h1>
        </div>  
        <div className='flex m-5 items-center justify-between gap-4 text-white text-2xl'>
        <a href="https://www.linkedin.com/in/ashiq-asokan-75667a196/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BHi3Pt5RxRmOeYJu2xeP0NA%3D%3D">
          <FaLinkedin />
        </a>
            
        <a href="https://github.com/AshiqAshokan">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/ashiqashokan/#">
          <FaInstagram />
        </a>
        <button onClick={handleDownload}>
          <FaFileDownload />
        </button>
        </div>
    </div>
  )
}

export default Navbars
