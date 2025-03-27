"use client";
import Image from 'next/image';
import Logo from '@assets/assets/logo.png';
import Profile from '@assets/assets/profile.jpeg';
import Alarm from '@assets/assets/Alarm.svg';
import filter from '@assets/assets/filter.svg';
// import { MobileView } from './MobileView';



const Navbar = () => {

  return (
    <navbar className="navbar container-fluid flex items-center bg-white  w-full  md:h-[71px] md:overflow-hidden flex-row md:pr-[89px] fixed top-0 z-[999] pr-[10px]"
      style={
        {
          boxShadow: ' 0px 1px 2px 0px rgba(0, 0, 0, 0.25)',
        }
      }
    >
      <a href="#">
        <Image src={Logo} width={192} height={71} alt="Chuly Logo" className='mobileViewLogo' />
      </a>
      <form className="md:ml-[95px] flex justify-center items-center gap-[25px] ml-[10px]">
  {/* Search Input with Icon */}
  <div className="relative">
    <input 
      type="search" 
      placeholder="Search" 
      className="h-[33px] md:w-[202px] pl-10 bg-inputBg w-[152px]"
      style={{
        border: "1.5px solid rgba(62, 123, 234, 1)",
        outline: "0",
        borderRadius: "50px",
        fontWeight: "400",
        fontSize: "10px",
        padding: "8px 21px 8px 41px",
      }}
    />
    {/* Search Icon */}
    <svg 
      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 12.65z"></path>
    </svg>
  </div>

  {/* Filter Input with Icon */}
  <div className="relative">
    <input 
      type="search" 
      placeholder="Filter" 
      className="h-[33px] w-[85px] pl-10 bg-white"
      style={{
        border: "1.5px solid rgba(0, 0, 0, 0.6)",
        outline: "0",
        borderRadius: "50px",
        fontWeight: "500",
        fontSize: "12px",
        padding: "10px",
        paddingLeft: '31px',
        color: "rgba(0, 0, 0, 0.6)",
      }}
    />
    <Image src={filter} className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 " alt="filter icon svg" />
  </div>
</form>

      <div className="profileBell flex md:ml-auto ml-[20px] relative">
        <Image src={Alarm} alt="Notification Bell" className='md:mr-[40.8px] md:relative absolute right-[-10px]' />
        <Image src={Profile} alt="Profile Image" className='md:w-[50px] md:h-[50.61px] w-[100px] h-[50px]  object-cover rounded-[50px] relative left-[-10px]' />
      </div>

    </navbar>
  );
}

export default Navbar;
