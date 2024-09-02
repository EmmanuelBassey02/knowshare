import React from 'react'
import error from '../../assets/error.png'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
     <div class="text-center px-[5vw] h-screen py-[50px] bg-fuchsia-100">
               <img src={error} alt="" className="m-auto md:h-[290px] h-[210px] md:w-[400px] w-[95%]"/>
                <h1 className="md:text-[60px] text-[28p] text-fuchsia-950">Something went wrong! &nbsp; 😥</h1> <br/>
                <p className="md:text-[34px] text-[24px] text-neutral-700">We're having issues loading this page.</p><br/>
                <h4 className="text-black font-bold md:text-[20px] text-[14px]">Connect to the internet and try again &nbsp; 
                <span>or go back to &nbsp;   
                  <Link to="/">
                    <button className='hover:underline hover:text-fuchsia-600 underline'>
                        Home
                    </button>
                  </Link>
                </span>
                </h4>
                <p></p>
        </div>
  )
}

export default ErrorPage