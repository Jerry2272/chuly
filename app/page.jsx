import React from 'react'
import Navbar from './components/navbar/Navbar'
import WelcomeBoard from './components/molecules/WelcomeBoard'
import CardSection from './components/molecules/CardSection'
// import SideBar from './components/navbar/SideBar'

const page = () => {
  return (
    <div className='bg-bgColor  md:pt-[4.50em] mt-[1em]'>
    <Navbar />
 <section className=" px-[40px] md:px-[117px] py-[50px]">
 <WelcomeBoard />
 <CardSection />
 </section>
    </div>
  )
}

export default page