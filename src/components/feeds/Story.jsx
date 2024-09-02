import React from 'react'
import { Avatar } from 'flowbite-react'
import './story.css'

function Story({ image, profileSrc, title}) {
  return (
    <div style={{ backgroundImage: `url{${image}}`}} className='story  relative bg-cover bg-no-repeat w-[130px] h-[200px] rounded-[10px]  border-[1px] border-fuchsia-500 shadow-md'>
        <Avatar rounded bordered="fuchsia-700" className='story_avatar rounded-[50%] h-[40px] w-[50px] m-[10px] border-[5px] border-fuchsia-900' scr={profileSrc} />
        <h4 className='h4-story'>{title}</h4>
    </div>
  )
}

export default Story