import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
          <div className="bg-black h-[100vw] pt-[80px]">
              <div className="bg-fuchsia-100 text-center border-2 pt-[30px] pb-[25px] px-[30px]  w-[430px] h-[450px]  m-auto rounded-[10px]">
                  <h1 className="font-bold text-[30px] m-auto text-fuchsia-950">PASSWORD RECOVERY</h1><br/>
                  <p className="font-bold">Enter your email address</p><br/> 

                  <div className="border-2  flex gap-[-2px]">
                      <button disabled class="w-[18%] bg-white rounded-tl-[6px] rounded-bl-[6px] border border-neutral-700"><i className="fa-solid fa-envelope text-[26px]"></i></button>
                    <input type="email" name="" id="" class="w-[82%] rounded-[6px] rounded-tl-none rounded-bl-none outline-none focus:border-fuchsia-800 focus:ring-fuchsia-700" placeholder="Enter your email address" required/><br/><br/>
                  </div> <br/>   
                  
                  <p className="text-[13px] w-[100%] text-left">We'll check if this email address matches an existing KnowShare account. Then a link will be sent to this email address. Follow the link to reset your password.</p><br/><br/>


                  <button type="submit" className="bg-fuchsia-950 p-3 rounded-[6px] w-[100%] text-white font-bold mt-[-20px]">Proceed</button> <br/>

                  {/* Once the person put his email address and click on "proceed button", it should send an email to the 
                  person with a link to recover the password. Once the person clicks 
                  on the link, it should take him to the ResetPassword page. */}

                <Link to='/login'>
                  <button type="button" className="bg-fuchsia-950 hover:bg-fuchsia-800 p-2.5 rounded-[6px] w-[100%] text-white font-bold mt-[10px]">Back</button>
                </Link>
              </div>
          </div>
  )
}

export default ForgotPassword