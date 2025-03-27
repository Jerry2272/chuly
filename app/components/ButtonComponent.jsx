import React from 'react';

const ButtonComponent = ({ text, bgColor }) => {
  return (
    <button className={`w-[50px] h-[17px] rounded-[50px] p-[10px] text-[6px] font-[500] flex justify-center items-center text-white ${bgColor}`}>
      {text}
    </button>
  );
};




const BlackButton = ({txt , bgColor}) =>{
  return (
    <button className={` w-[auto] h-[28px] rounded-[5px] p-[10px] bg-blackButton text-[12px] font-[500] text-white flex justify-center items-center  ${bgColor} `}>{txt}</button>
  )
}

export { BlackButton };
export default ButtonComponent;