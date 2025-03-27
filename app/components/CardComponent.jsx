import Image from 'next/image'
import React from 'react'
import CardDetails from '@/public/utils/data'
import ButtonComponent from './ButtonComponent'


const CardComponent = () => {
  return (
        CardDetails.map((card, index) => {
            return (
                <div key={index}>
                    <div  className="card md:w-[212px] pb-[2em] md:h-[234px] rounded-[8px] bg-white  "
                    style={
                        {
                            boxShadow: '0px 0.5px 2px 0px rgba(0, 0, 0, 0.25)'
                        }
                    }
                    > 
                    <div className="card-header relative"
                    
                    style={{
                       borderTopLeftRadius  : '8px',
                          borderTopRightRadius : '8px'
                    }}
                    >
                            <Image src={card.bgImg} alt="Card background" className='w-[100%]  h-[104px] md:h-[88px] object-cover'  />
                            <Image src={card.img} alt="Card background" className='md:w-[60px] md:h-[60px] w-[100px] h-[100px] rounded-[50px] absolute right-[35%] bottom-0 top-[50%] md:top-[63%]' style={{
                                border: '2px solid rgba(255, 255, 255, 1)'
                            }}  />
                           
                    </div>
                        <div className="card-body mb-[18px] md:h-[100px]">
                            <div className='flex flex-row justify-between pl-[22px] pr-[14px] pt-[6px] relative' >
                                <h5 className='text-[9px] font-[600]'>{card.name}</h5>
                                <h5  className='text-[8px] font-[600]'>{card.percent}</h5>
                            </div>
                            <div className='flex flex-row justify-between  pl-[22px] pr-[14px] pt-[6px]'>
                                <h5  className='text-[8px] font-[600]'>{card.location}</h5>
                                <span className='flex items-center justify-center'>
                                <Image src={card.verifyIcon}  />
                                <h5  className='text-[7px] font-[600]'>{card.verify}</h5>
                                </span>
                            </div>
                           <div className=''>
                           <p className="card-text text-[7px] font-[500] pl-[22px] pt-[12px]">{card.text}</p> 
                           </div>
                        </div>

                        <div className="card-footer flex flex-row justify-between pl-[22px] pr-[14px]">
                            <ButtonComponent text={card.buttonText} />
                            <Image src={card.LoveImg} alt={'Love Image'} />
                        </div>
                    </div>
                </div>
            )
        })
  )
}

export default CardComponent