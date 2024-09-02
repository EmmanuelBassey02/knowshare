import { Avatar } from 'flowbite-react'
import React, { useState } from 'react'
// import { FaMedia } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './messageSender.css'

function MessageSender() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e)=> {
    e.preventDefault();


    setInput('');
    setImageUrl('');

  };
  return (
    <div className='messageSender mt-[40px] w-[100%] bg-white rounded-[10px]'>
       <div className="messageSender_top flex  gap-[20px] border-b-[1px] border-[#d92de9] p-[15px]">
         <Avatar rounded/>
         <form action="" className='form flex-1 gap-[20px] flex items-center'>
           <input value={input} onChange={(e) => setInput(e.target.value)} type="text" name="" id="" className='messageSender_input pl-[10px] rounded-[28px] w-[320px] h-[45px] outline-0 border-none px-[5px] py-[20px] mx-0 my-[10px] bg-[#eff2f5] focus:ring-fuchsia-700' placeholder="Share your thoughts or knowledge"/>


           <input  value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="text" name="" id="" className='messageSender_input rounded-[28px] h-[45px] outline-0 border-none px-[5px] py-[20px] mx-0 my-[10px] bg-[#eff2f5] focus:ring-fuchsia-700'/>
            

            <button onClick={handleSubmit} type='submit' className='hidden'>hidden submit</button>
         </form>
       </div> 


       <div className="messageSender_bottom flex justify-between  px-[25px] py-[15px]">
          <div className="messageSender_option flex p-[20px] h-[55px] m-[5px] items-center hover:bg-[#dadbdc] bg-neutral-100 rounded-[20px]">
            <FontAwesomeIcon icon={faImage} className='text-fuchsia-500 text-[24px]'/>
            <h3 className='font-medium ml-[10px] cursor-pointer'>Media</h3>
          </div>

          <div className="messageSender_option  flex p-[20px] h-[55px] m-[5px] items-center  hover:bg-[#dadbdc] bg-neutral-100 rounded-[20px]">
            <FontAwesomeIcon icon={faImage} className='text-fuchsia-500 text-[24px]'/>
            <h3 className='font-medium ml-[10px] cursor-pointer'>Photo/Video</h3>
          </div>

          <div className="messageSender_option  flex p-[20px] h-[55px] m-[5px] items-center  hover:bg-[#dadbdc] bg-neutral-100 rounded-[20px]">
            <FontAwesomeIcon icon={faImage} className='text-fuchsia-500 text-[24px]'/>
            <h3 className='font-medium ml-[10px] cursor-pointer'>Feeling/Activity</h3>
          </div>
       </div>
    </div>
  )
}

export default MessageSender