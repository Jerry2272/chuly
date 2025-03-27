"use client";
import { useState } from "react";
import Image from "next/image";
import ProfilePic from "@assets/assets/profile.jpeg";
import DashboardIcon from "@assets/assets/CircledMenu.svg";
import menuBar from "@assets/assets/Menu.svg";
import User from "@assets/assets/User.svg";
import Mutual from "@assets/assets/Agree.svg";
import Love from "@assets/assets/Heart.svg";
import Rom from "@assets/assets/doubleLove.svg";
import Sub from "@assets/assets/PaidBill.svg";
import Settings from "@assets/assets/Gear.svg";
import Logout from "@assets/assets/Shutdown.svg";


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close sidebar when clicking outside
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Backdrop Overlay (Dark background effect) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998]"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "md:w-[286px] w-[90%] bg-white z-[999] md:ml-[2em] ml-[1em] mt-[2.80em] rounded-[8px] " : "w-6"
        } h-screen p-5 pt-8 fixed transition-all duration-200 left-0`}
      >
        {/* Menu Button */}
        <Image
          src={menuBar}
          className="absolute md:top-5 md:right-[-30px] cursor-pointer p-2 rounded-md top-[-10px] right-[-21em]"
          onClick={() => setIsOpen(!isOpen)}
          alt="menu bar"
          width={40}
          height={40}
        />

        <div className="flex items-center gap-4 flex-col">
          <Image
            src={ProfilePic}
            alt="Profile Picture"
            className="rounded-full w-[75px] h-[75px] object-cover"
          />
          {isOpen && <h2 className="text-xl font-semibold">Temiloluwa</h2>}
        </div>

        {/* Menu Items */}
        <ul className="mt-4 space-y-3 flex flex-col justify-center items-center text-center overflow-scroll h-auto">
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            {isOpen && <span
                  style={{
                    background: 'rgba(239, 36, 36, 1)',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    
                }}
            className="flex gap-[20px]"> <Image src={DashboardIcon} alt="dashBoard Icon" /> <span className="text-center text-white text-[12px] font-[500]"
      
            > Dashboard</span></span>}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-[12px] font-[500] text-black" >
            {isOpen && <span className="flex gap-[20px]"><Image src={User} alt="User Icon" />  <span className="text-[12px] font-[600]"><a href="https://chuly-two.vercel.app/Profile">My Profile</a></span> </span>}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-[12px] font-[500]">
            {isOpen && <span className="flex gap-[20px]"><Image src={Love} alt="User Icon" /> <span className="text-[12px] font-[600]">Favorites</span></span>}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            {isOpen && <span className="flex gap-[20px]"> <Image src={Mutual} alt="Mutual Icon" /><span className="text-[12px] font-[600]">My Mutuals</span></span>}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            {isOpen && <span className="flex gap-[20px]"><Image src={Sub} alt="Subscribed Icon" /><span className="text-[12px] font-[600]">My Subscribed</span></span>}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            {isOpen && <span className="flex gap-[20px]"><Image src={Rom} alt="Romance Icon" /><span className="text-[12px] font-[600]">Interested In Me</span></span>}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            {isOpen && <span className="flex gap-[20px]"><Image src={Settings} alt="Settings Gear Icon" /><span className="text-[12px] font-[600]">Settings</span></span>}
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            {isOpen && <span className="flex gap-[20px]"><Image src={Logout} alt="Logout Icon" /><span className="text-[12px] font-[600]">Logout</span></span>}
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
