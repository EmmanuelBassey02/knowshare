import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import chat from '../../assets/chat.jpg'
import commStories from '../../assets/commStories.jpg'

function Feed() {
  return (
    <div className='feed  flex flex-col  ml-[60px] justify-center items-center px-[30px]  py-[30px] border-2'>
        <StoryReel/> 
        <MessageSender/>

        <Post
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&"
        message="wow it works"
        timestamp=""
        username=""
        image={commStories.jpg}
        
        />



     <Post
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&"
        message="wow it works"
        timestamp=""
        username=""
        image="commStories.jpg"
        
        />



     <Post
        profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400&"
        message="wow it works"
        timestamp=""
        username=""
        image="chat.jpg"
        
        />
    </div>
  )
}

export default Feed