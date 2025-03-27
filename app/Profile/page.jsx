import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroPro from '../components/molecules/HeroPro'
import SideBar from '../components/navbar/SideBar'

const page = () => {
  return (
    <div className='bg-bgColor  md:pt-[4em]'>
        <Navbar />
        <SideBar />
        <section className='md:px-[154px]'>
             <HeroPro />
        </section> 
    </div>
  )
}

export default page