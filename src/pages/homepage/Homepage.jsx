import React from 'react'
// import SecondNavbar from '../../components/navbar/secondNav'
import Header from '../../components/navbar/header'
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feeds/Feed'
import Widgets from '../../components/feeds/Widgets'

function Homepage() {
  return (
    <div className='bg-neutral-200'>
       {/* <SecondNavbar/> */}

       <Header/>

        <div className='app_body flex'>
          <Sidebar/>
          <Feed/>
          <Widgets/> <br />


        </div>

    </div>
  )
}

export default Homepage