import React from 'react'

function ResetPassword() {
  return (
    <div>
          <section className="bg-black h-[100vw] pt-[80px]">
                <div className="bg-fuchsia-100 text-center border-2 pt-[30px] pb-[25px] px-[30px]  w-[430px] h-[450px]  m-auto rounded-[10px]">
                    <h1 className="font-bold text-[28px] m-auto text-fuchsia-950">CREATE NEW PASSWORD</h1><br/>
                    <p className="font-bold">Please enter a new password</p><br/> 

                    <p className="text-[13px] font bg-green-200 p-2">Ensure your password contains an uppercase, a lower case, and  a string #!%$</p> <br/>


                    <input type="password" name="newpassword" id="newpassword" class="w-[100%] rounded-[6px] focus:ring-fuchsia-700 focus:border-fuchsia-700 border outline-none" placeholder="Enter new password" required/>
                    
                    <br/><br/>
                    
                    <input type="password" name="newpassword" id="newpassword" class="w-[100%] rounded-[6px] focus:ring-fuchsia-700 focus:border-fuchsia-700" placeholder="Confirm password" required/>
                    <br/><br/>
                    
                    <button type="submit" className="bg-fuchsia-950 p-3 rounded-[6px] w-[100%] text-white font-bold mt-[-20px]">Reset password</button> <br/>
                </div> 
         </section>
    </div>
  )
}

export default ResetPassword