import Image from 'next/image'
import React from 'react'
import { BlackButton } from '../ButtonComponent'
import proImg from '@assets/assets/proBg.png'
import proUpdate from '@assets/assets/proUpdate.png'
import pencilEdit from '@assets/assets/Pencil@2x.svg'
import createSvg from '@assets/assets/Create.svg'
import Addsvg from '@assets/assets/Add.svg'
import addImg from '@assets/assets/AddImage.svg'
import imgPro  from '@assets/assets/profile.jpeg'
import bikeSvg  from '@assets/assets/bike.svg'
import houseSvg  from '@assets/assets/Museum.svg'
import bowlSvg  from '@assets/assets/RiceBowl.svg'
import danceSvg  from '@assets/assets/dance.svg'
import umbrella  from '@assets/assets/umbrellaCircle.svg'
import hourSvg  from '@assets/assets/Hourglass.svg'
import travelSvg  from '@assets/assets/travel.svg'
import drawSvg  from '@assets/assets/draw.svg'
import axeSvg  from '@assets/assets/SmallAxe.svg'
import photoSvg  from '@assets/assets/Camera.svg'
import Poet  from '@assets/assets/poetry.svg'
import NeedleSvg  from '@assets/assets/Needle.svg'
import gender  from '@assets/assets/Gender.svg'
import compareHeight  from '@assets/assets/CompareHeights.svg'
import newJob  from '@assets/assets/NewJob.svg'
import romance  from '@assets/assets/Romance.svg'
import map  from '@assets/assets/Globe.svg'
import bodyType  from '@assets/assets/bodyType.svg'
import lotus  from '@assets/assets/LotusTemple.svg'
import globe  from '@assets/assets/Globe.svg'

const HeroPro = () => {
  return (
  <>
   <section className='h-[198px] mt-[36px] md:pl-[47px] md:pr-[21px] md:pt-[17px] pt-[32px] px-[1em]'  
   style={{
    backgroundImage: `url(${proImg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   }}
   >
     <div className='flex justify-between items-center mb-[21px]'>
      <a href="/">
      <BlackButton txt={'Back'} />
      </a>
      <BlackButton txt={'Update Cover'}  />
    </div>
    <div className='flex relative'>
      <Image src={proUpdate} alt={'profile picture'} className='mr-[17px] h-[180px]' />
      <Image src={Addsvg} alt='create Images svg icon' className='absolute bottom-[-10%] right-[80%]' />
      <span className='md:mt-[30px]'>
        <h5 className='font-[600] text-[16px] flex'>Temiloluwa, 27 <span className='ml-[14px]'><Image src={createSvg} alt='add icon svg' /></span></h5>
        <p  className='font-[600] text-[14px]'>Lagos</p>
      </span>                                                                                                                                                                                                                                                                                                                                     
    </div>
   </section>
      <div className='flex justify-end gap-[14px] items-center mt-[17px] md:pl-[6px] md:pr-[6px]'>
      <BlackButton txt={'Edit Profile'} bgColor={'bg-buttonColor'} />
      <BlackButton txt={'Edit Match Setup'} bgColor={'bg-buttonColor'}  />
    </div>

   <section className='mt-[80px]'>
    <div className='md:w-[486px] md:h-[81px] rounded-[6px] bg-bgWhite w-[100%]' 
    style={
      {
        border: ' 0.5px solid rgba(217, 217, 217, 1) ',
        padding: '14px 31px 14px 31px'
      }
    }
    >
      <h1 className='text-[12px] font-[500] text-blackButton flex'>A few words about myself  <span className='ml-[14px]'><Image src={pencilEdit} alt={'edit icon SSSSSSSsvg'} /></span> </h1>

    </div>

    <div className='md:w-[486px] md:h-[99px] rounded-[6px] bg-bgWhite flex justify-between items-center mt-[14px] py-[20px]' 
    style={
      {
        border: ' 0.5px solid rgba(217, 217, 217, 1) ',
        padding: '14px 20px 14px 20px'
      }
    }
    >
   <div className='flex justify-between'>
      <Image src={imgPro} alt='' className='w-[70px] h-[70px] object-cover rounded-[8px]' />
   </div>
   <div className='w-[70px] h-[70px] rounded-[8px] bg-white text-center flex justify-center items-center flex-col' 
   style={
    {
      border: '0.5px solid rgba(217, 217, 217, 1)',
      padding: '24px 14px 24px 14px'
    }
   }
   >
    <h6 className='text-[8px] font-[500]'>Add Photo</h6>
    <Image src={addImg} alt='svg icon to add images ' />
   </div>
   <div className='w-[70px] h-[70px] rounded-[8px] bg-white text-center flex justify-center items-center flex-col' 
   style={
    {
      border: '0.5px solid rgba(217, 217, 217, 1)',
      padding: '24px 14px 24px 14px'
    }
   }
   >
    <h6 className='text-[8px] font-[500]'>Add Photo</h6>
    <Image src={addImg} alt='svg icon to add images ' />
   </div>
   <div className='w-[70px] h-[70px] rounded-[8px] bg-white text-center flex justify-center items-center flex-col' 
   style={
    {
      border: '0.5px solid rgba(217, 217, 217, 1)',
      padding: '24px 14px 24px 14px'
    }
   }
   >
    <h6 className='text-[8px] font-[500]'>Add Photo</h6>
    <Image src={addImg} alt='svg icon to add images ' />
   </div>
   <div className='w-[70px] h-[70px] rounded-[8px] bg-white text-center flex justify-center items-center flex-col' 
   style={
    {
      border: '0.5px solid rgba(217, 217, 217, 1)',
      padding: '24px 14px 24px 14px'
    }
   }
   >
    <h6 className='text-[8px] font-[500]'>Add Photo</h6>
    <Image src={addImg} alt='svg icon to add images ' />
   </div>

    </div>

<span className='flex  flex-wrap justify-between items-center'>

  {/* my hobbies  */}
<div className='md:w-[323px] md:h-[408px] w-[400px] h-[auto] bg-white mt-[16px] ' 
    style={{
      border: '0.5px solid rgba(217, 217, 217, 1)'
    }}
    >
     <span className='flex justify-between items-center px-[24px] ' >
     <h5 className='mt-[13px] text-[12px] font-[600]'>My Hobbies</h5>
     <Image src={createSvg} alt='add icon svg' />
     </span>
      <div className=' flex justify-start items-center px-[22px] gap-[20px]  flex-wrap mt-[14px]'>
      <div>
      <div>
        <Image src={umbrella} alt='umbrella Svg icon ' />
      </div>
        <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>Laying on the <br /> Beach</h5>
      </div>

      <div>
      <div className='w-[50px] h-[50px] bg-bgHobby rounded-[50px]  flex justify-center items-center'>
      <Image src={bikeSvg} alt='Bike Svg' />
      </div>
      <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>Biking</h5>
      </div>

    <div>
    <div className='w-[50px] h-[50px] bg-bgBowl rounded-[50px]  flex justify-center items-center'>
          <Image src={bowlSvg} alt='bowl' />
      </div>
          <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>Cooking</h5> 
    </div>

    <div>
            
    <div className='w-[50px] h-[50px] bg-bgDance rounded-[50px]  flex justify-center items-center'>
      <Image src={danceSvg} alt='dance svg' />
      </div>
      <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>Dancing</h5>
    </div>

     <div>
     <div className='w-[50px] h-[50px] bg-bgHouse  rounded-[50px] flex justify-center items-center flex-col'>
      <Image src={houseSvg} alt='house svg' />
      </div>
      <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>Museums & Arts</h5>
     </div>
      </div>
    </div>


{/* my Interest  */}
    <div className='md:w-[323px] md:h-[408px] w-[400px] h-auto bg-white mt-[16px] rounded-[5px] '  

    
    style={{
      border: '0.5px solid rgba(217, 217, 217, 1)'
    }}
    >
     <span className='flex justify-between items-center px-[24px]' >
     <h5 className='mt-[13px] text-[12px] font-[600]'>My Interest</h5>
     <Image src={createSvg} alt='add icon svg' />
     </span>
      <div className=' flex justify-start items-center px-[22px] gap-[20px]  flex-wrap mt-[14px]'>
      <div>
      <div className='w-[50px] h-[50px] bg-bgTravel rounded-[50px]  flex justify-center items-center'>
        <Image src={travelSvg} alt='Travel Svg icon ' />
      </div>
        <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>Travel</h5>
      </div>

      <div>
      <div className='w-[50px] h-[50px] bg-bgDraw rounded-[50px]  flex justify-center items-center'>
      <Image src={drawSvg} alt='Drawing Pen Svg' />
      </div>
      <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>Drawing</h5>
      </div>

    <div>
    <div className='w-[50px] h-[50px] bg-bgHistory rounded-[50px]  flex justify-center items-center'>
          <Image src={hourSvg} alt='Hour Glass Svg' />
      </div>
          <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>History </h5> 
    </div>

    <div>
            
    <div className='w-[50px] h-[50px] bg-bgWood rounded-[50px]  flex justify-center items-center'>
      <Image src={axeSvg} alt='Axe svg' />
      </div>
      <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>Woodworking</h5>
    </div>

     <div>
     <div className='w-[50px] h-[50px] bg-bgCamera  rounded-[50px] flex justify-center items-center flex-col'>
      <Image src={photoSvg} alt='Photography svg' />
      </div>
      <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>Photography</h5>
     </div>
     <div>
     <div className='w-[50px] h-[50px] bg-bgP  rounded-[50px] flex justify-center items-center flex-col'>
      <Image src={Poet} alt='Poetry svg' />
      </div>
      <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>Poetry</h5>
     </div>
     <div>
     <div className='w-[50px] h-[50px] bg-bgNeedle  rounded-[50px] flex justify-center items-center flex-col'>
      <Image src={NeedleSvg} alt='Needle svg' />
      </div>
      <h5 className='font-[500] text-[8px] text-textColor text-center pt-[5px]'>Knitting</h5>
     </div>
      </div>
    </div>
 

{/* About Me */}
<div className="w-[323px] h-[408px] bg-white mt-[16px] rounded-[5px] p-[12px_24px] border border-gray-300">
  <h2 className="text-[12px] font-[600] mb-4">About Me</h2>

  {/* Gender */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgHistory  rounded-full flex justify-center items-center'>
      <Image src={gender} alt='Gender Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Gender:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Male</span>
  </div>

  {/* Age */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgTravel rounded-full flex justify-center items-center'>
      <Image src={compareHeight} alt='Age Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Age:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">27</span>
  </div>

  {/* Occupation */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgCamera rounded-full flex justify-center items-center'>
      <Image src={newJob} alt='Occupation Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Occupation:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Engineer</span>
  </div>

  {/* Relationship */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgP rounded-full flex justify-center items-center'>
      <Image src={romance} alt='Relationship Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Relationship:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Single</span>
  </div>

  {/* Location */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgDance  rounded-full flex justify-center items-center'>
      <Image src={map} alt='Location Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Location:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Lagos</span>
  </div>

  {/* Height */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgP rounded-full flex justify-center items-center'>
      <Image src={compareHeight} alt='Height Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Height Range:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">55 - 60</span>
  </div>

  {/* Weight */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgHobby rounded-full flex justify-center items-center'>
      <Image src={bodyType} alt='Weight Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Weight Range:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">60 - 70kg</span>
  </div>

  {/* Religion */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgTravel rounded-full flex justify-center items-center'>
      <Image src={lotus} alt='Religion Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Religion:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Christianity</span>
  </div>

  {/* Nationality */}
  <div className="flex items-center gap-3">
    <div className='w-[20px] h-[20px] bg-bgDkYellow  rounded-full flex justify-center items-center'>
      <Image src={globe} alt='Nationality Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Nationality:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Nigerian</span>
  </div>
</div>


{/*I am Looking for  female */}

<div className="w-[323px] h-[408px] bg-white mt-[16px] rounded-[5px] p-[12px_24px] border border-gray-300">
  <h2 className="text-[12px] font-[600] mb-4">I m Looking for</h2>

  {/* Gender */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-20px] h-[20px] bg-bgHistory  rounded-full flex justify-center items-center'>
      <Image src={gender} alt='Gender Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Gender:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Female</span>
  </div>

  {/* Age */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgTravel rounded-full flex justify-center items-center'>
      <Image src={compareHeight} alt='Age Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Age:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">18 - 25</span>
  </div>

  {/* Occupation */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgCamera rounded-full flex justify-center items-center'>
      <Image src={newJob} alt='Occupation Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Occupation:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Engineer</span>
  </div>

  {/* Relationship */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgP rounded-full flex justify-center items-center'>
      <Image src={romance} alt='Relationship Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Relationship:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Single</span>
  </div>

  {/* Location */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgDance  rounded-full flex justify-center items-center'>
      <Image src={map} alt='Location Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Location:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Lagos</span>
  </div>

  {/* Height */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgP rounded-full flex justify-center items-center'>
      <Image src={compareHeight} alt='Height Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Height Range:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">55 - 60</span>
  </div>

  {/* Weight */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgHobby rounded-full flex justify-center items-center'>
      <Image src={bodyType} alt='Weight Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Weight Range:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">60 - 70kg</span>
  </div>

  {/* Religion */}
  <div className="flex items-center gap-3 mb-3">
    <div className='w-[20px] h-[20px] bg-bgTravel rounded-full flex justify-center items-center'>
      <Image src={lotus} alt='Religion Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Religion:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Christianity</span>
  </div>

  {/* Nationality */}
  <div className="flex items-center gap-3">
    <div className='w-[20px] h-[20px] bg-bgDkYellow  rounded-full flex justify-center items-center'>
      <Image src={globe} alt='Nationality Icon' width={24} height={24} />
    </div>
    <span className="font-[400] text-[10px]">Nationality:</span>
    <span className="text-[12px] font-[600] pl-[38px] text-left">Nigerian</span>
  </div>
</div>


</span>
   </section>
  </>
  )
}

export default HeroPro