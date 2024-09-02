import React from 'react'

function Widgets() {
  return (
    <div className='widgets'>
        <iframe src="https://facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="240"
        height="100%"
        style={{ border: "none", overflow: "hidden"}}
        className='bg-fuchsia-500'
        allowTrancyparent="true"
        allow="encrypted-media"
        
        frameborder="0"></iframe>
    </div>
  )
}

export default Widgets