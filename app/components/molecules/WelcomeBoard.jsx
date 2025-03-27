"use client";
import Image from 'next/image';
import Profile from '@assets/assets/profile.jpeg';
import SideBar from '../navbar/SideBar';

const WelcomeBoard = () => {
    return (
        <>
        <SideBar />
        <section className='flex items-center'>
            <div className="imgProfile">
                <Image src={Profile} alt="Profile Image" className='w-[100px] h-[100px] object-cover rounded-[50px] md:mr-[16px]' />
            </div>
            <div className="txtInfo">
                 <h1 className="text-black font-[600] text-[12px] mb-[12px]">Welcome, Temiloluwa</h1>
                <h5 className="text-black font-[600] text-[9px] mb-[4px]">My Profile Completeness</h5>
                <progress value="60" max="100" className=' progressiveBar w-[176px] rounded-[50px] h-[8px]'>60%</progress><span className='text-[9px] font-[500] text-black pl-[8px]'>60%</span>
            </div>
            <div className="selector md:ml-[80px]  flex items-center md:gap-[17px]">
                <h5 className='text-[12px] font-[600]'>Relationship Type:</h5>
                <select 
    name="" 
    id="" 
    className="bg-white w-[118px] h-[24px] rounded-[8px] text-black text-[10px] pr-6"
    style={{
        padding: '4px 12px',
        boxShadow: '0px 2px 10px 0px rgba(124, 141, 181, 0.12)',
        fontWeight: '400',
        lineHeight: '150%',
        appearance: 'none', 
        backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMUw2IDdsNS01IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==)', // Default select arrow
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px center',
        backgroundSize: '12px', //
    }}
>
    <option>Dating</option>
</select>


            </div>
        </section>
        </>
    )
}

export default WelcomeBoard