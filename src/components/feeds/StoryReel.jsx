import React from 'react'
import Story from './Story'
import imgg1 from '../../assets/imgg1.jpg'
import img9 from '../../assets/img9.jpg'

function StoryReel() {
  return (
    <div className='storyReel z-[1] border-2 border-black flex gap-[5px]'>
        <Story
          image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
          profileSrc={img9.jpg}
          title="Emma Bassey"
        />

        <Story
          image="imgg1.jpg"
          profileSrc={img9.jpg}
          title="Sonny Sanga"
        />

        <Story
          image={imgg1.jpg}
          profileSrc={img9.jpg}
          title="Lucas Bolt"
        />


        <Story
          image={imgg1.jpg}
          profileSrc={img9.jpg}
          title="Kevin Powell"
        />


        <Story
          image={imgg1.jpg}
          profileSrc={img9.jpg}
          title="Sonny Sanga"
        />
    </div>
  )
}

export default StoryReel