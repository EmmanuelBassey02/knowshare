import React from 'react'
import { Link } from 'react-router-dom'

function SignupPage() {
  return (
  

              <div class="bg-black  h-full pb-[100px] w-[100vw]  px-[3vw] justify-center align-middle text-center items-center">

                <div className='h-[65px] p-2 bg-fuchsia-700 px-[20px]'>
                    <p className='h-[45px] w-[45px] text-center text-[26px] rounded-[10px] p-[5px] bg-slate-100 hover:bg-neutral-400'> <Link to="/prehomepage">🔙</Link></p>
                </div>
        


        <div className=" h-full w-[90vw] md:w-[500px] lg:w-[40vw] p-4 rounded-[15px] m-auto text-center border  border-neutral-700">
            <h1 className="text-neutral-200 text-[30px] font-bold">Welcome!</h1>
            <h2 className="text-[28px] text-neutral-300">Join <span className="text-fuchsia-500 font-bold">KnowShare
                </span>Community</h2><br/>


            <div
                className=" h-fit px-[8px] pl-[10vw] sm:pl-[0]  block sm:flex justify-center align-middle gap-[20px] text-center">
                <button
                    className="pt-[6px]  gap-[10px] flex justify-center align-middle sm:w-[44vw] w-[70vw] h-[40px] sm:h-[45px] bg-transparent border-2 border-solid border-white rounded-[10px]">
                    <i class="fa-brands fa-facebook text-white text-[28px]"></i>
                     &nbsp;
                    <p className="text-white font-bold text-[14px]">Login with Google</p>
                </button>


                <button
                    className="pt-[5px] gap-[10px]  flex justify-center align-middle sm:w-[44vw] sm:mt-0 mt-[12px] w-[70vw] h-[40px] sm:h-[45px] bg-transparent border-2 border-solid border-white rounded-[10px]">
                    <i className="fa-brands fa-twitter  text-white text-[28px]"></i>
                    <p className="text-white font-bold text-[14px]">Login with Twitter</p>
                </button>
            </div>

            <p className="text-neutral-400 px-[15px]  bg-black w-fit  m-auto relative top-[14px]">OR USE YOUR EMAIL</p>
            <hr className="text-white"/> <br/>


            <div className="w-[100%] text-left">

                <label for="" classNames="text-white text-left mb-[10px]">First Name</label><br/>
                <input type="text" name="" id=""
                    className="pl-[10px] border-2 border-solid border-neutral-400 bg-transparent text-white mt-[10px] outline-none h-[40px]  w-[100%] rounded-[12px]"
                    placeholder="First Name"/> <br/> <br/>

                <label for="" className="text-white text-left mb-[10px]">Last Name</label><br/>
                <input type="text" name="" id=""
                    className="pl-[10px] border-2 border-solid border-neutral-400 bg-transparent text-white mt-[10px] outline-none h-[40px]  w-[100%] rounded-[12px]"
                    placeholder="Last Name"/> <br/> <br/>

                <label for="" className="text-white text-left mb-[10px]">Email Address</label><br/>
                <input type="email" name="" id=""
                    className="pl-[10px] border-2 border-solid border-neutral-400 bg-transparent text-white mt-[10px] outline-none h-[40px]  w-[100%] rounded-[12px]"
                    placeholder="Enter your email address"/> <br/> <br/>


                <label for="" className="text-white text-left mb-[10px]">Password</label><br/>
                <div className="h-[55px] flex justify-between gap-[-2px]">
                    <input type="password" name="" id="password"
                        class="pl-[10px] border-2 border-solid border-neutral-400 bg-transparent text-white mt-[10px] outline-none h-[40px] border-r-0 w-[82%] rounded-[12px] rounded-tr-none rounded-br-none"
                        placeholder="Enter your Password"/>

                    <button type="button" id=""
                        className="js-button bg-black border-2 mt-[10px] h-[40px] text-[15px] font-bold  w-[18%] rounded-[10px] rounded-tl-none rounded-bl-none border-l-0 text-white"
                        onclick="togglePasswordVisibility()"><span id="toggleText">Show</span>
                    </button>
                </div><br/>

                <label for="" className="text-white text-left mb-[10px]">Confirm Password</label><br/>

                <div className="h-[55px] flex justify-between gap-[-2px]">
                    <input type="password" name="" id="ConfirmPassword"
                        className="pl-[10px] border-2 border-solid border-neutral-400 bg-transparent text-white mt-[10px] outline-none h-[40px] border-r-0 w-[82%] rounded-[12px] rounded-tr-none rounded-br-none"
                        placeholder="Enter your Password"/>

                    <button type="button" id=""
                        className="js-button bg-black border-2 mt-[10px] h-[40px] text-[15px] font-bold  w-[18%] rounded-[10px] rounded-tl-none rounded-bl-none border-l-0 text-white"
                        onclick="toggleConfirmPasswordVisibility()"><span id="ConfirmPasswordToggleText">Show
                            </span>
                    </button>
                </div>
            </div> <br/>

            <div>
              <p className='text-neutral-200 text-[14px] text-left font-light'>By continuing, you are setting a knowShare account and agree to our <Link to='/useragreement' className='text-fuchsia-400 hover:underline'>User agreement</Link> and <Link to='/privacypolicy' className='text-fuchsia-400 hover:underline'>privacy policy</Link></p>
            </div><br />

            <button
                className="bg-fuchsia-600 rounded-[12px] border-none w-[85%] md:w-[440px] h-[45px] font-bold">Register</button>
            <br/> <br/> <br/>

            <p className='text-neutral-500 text-left'>Go to <Link to="/" className='hover:underline hover:text-fuchsia-500'>Home</Link></p>
        </div>

       
    </div>
  )
}

export default SignupPage