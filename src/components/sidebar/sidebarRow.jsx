import React from 'react'
import { Avatar } from 'flowbite-react'

function SidebarRow({ src, Icon, title}) {
  return (
    <div className='sidebar_row'>
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}
        
       <p>{title}</p>
    </div>
  )
}

export default SidebarRow