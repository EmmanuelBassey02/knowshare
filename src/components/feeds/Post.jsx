import React from 'react'
import { Avatar } from 'flowbite-react'
import chat from '../../assets/chat.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment, faShare } from '@fortawesome/free-solid-svg-icons';


function Post({ profilePic, image, username, timestamp, message}) {
  return (
    <div className='post w-[100%] mt-[15px] rounded-[15px] bg-white shadow'>
         <div className="post_top flex relative items-center p-[15px]">
            <Avatar rounded src={chat.jpg} className='post_avatar mr-[10px]'/>
            <img src={chat.jpg} alt="" />
         </div>

         <div className="post_topInfo">
            <h3 className='font-medium'>Emma</h3>
            <p>Timestamp...</p>
         </div>

         <div className="post_bottom my-[10px] px-[15px] py-[25px] ">
            <p>{message}</p>
         </div>


         <div className="post_image">
            <img src={chat.jpg} alt="" className='w-[100%]'/>
         </div>

         <div className="post_options pt-[10px] flex justify-evenly border-t-[1px] border-solid border-neutral-400 font-medium cursor-pointer p-[15px]" >
            <div className="post_option flex items-center justify-center p-[5px] flex-1 hover:bg-neutral-200 hover:rounded-[10px]">
               {/* <FontAwesomeIcon icon="fa-regular fa-thumbs-up" /> */}
               <FontAwesomeIcon icon={faThumbsUp} className='text-[26px] text-neutral-400'/>
               <p className='m-[10px] text-neutral-400'>Like</p>
            </div>


            <div className="post_option flex items-center justify-center p-[5px] flex-1 hover:bg-neutral-200 hover:rounded-[10px]">
               <FontAwesomeIcon icon={faComment} className='text-[26px] text-neutral-400'/>
               <p className='m-[10px] text-neutral-400'>Comment</p>
            </div>


            <div className="post_option flex items-center justify-center p-[5px] flex-1 hover:bg-neutral-200 hover:rounded-[10px]">
               <FontAwesomeIcon icon={faShare} className='text-[26px] text-neutral-400'/>
               <p className='m-[10px] text-neutral-400'>Share</p>
            </div>


            <div className="post_option flex items-center justify-center p-[5px] flex-1 hover:bg-neutral-200 hover:rounded-[10px]">
               <FontAwesomeIcon icon={faComment} className='text-[26px] text-neutral-400'/>
            </div>
         </div>
    </div>
  )
}

export default Post