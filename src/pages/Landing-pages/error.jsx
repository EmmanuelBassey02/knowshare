import React from 'react'
import error from '../../assets/error.png'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
     <div class="text-center px-[5vw] py-[50px]">
               <img src={error} alt="" className="m-auto h-[290px] w-[400px]"/>
                <h1 className="text-[60px] text-fuchsia-950">Something went wrong! &nbsp; 😥</h1> <br/>
                <p className="text-[34px] text-neutral-700">We're having issues loading this page.</p><br/>
                <h4 className="text-black font-bold text-[20px]">Connect to the internet and try again &nbsp; 
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