import React from 'react'

function EditProfile() {
  return (
    <>
<section class="bg-white px-[1vw] pt-[30px] pb-[30px] h-[150vh]">

        <div class="bg-fuchsia-50 px-[2vw] py-[50px] flex flex-wrap gap-[20px] h-fit justify-between align-middle">

            <h1 class="text-[26px] p-2 bg-fuchsia-900 text-white text-center rounded-t-[15px] font-bold w-[90vw]">Edit your profile here</h1>  

                    
                    <div class="border-2 px-[20px] pt-[20px] w-[43vw] bg-fuchsia-200  h-fit pb-[50px]  rounded-[10px]">
                        {/* <p class="font-bold text-[18px] text-left mb-[10px]">Personal details</p> */}
                        <div class="h-fit pb-[40px] rounded-[15px] bg-white p-[20px]">
                            
                                <div class="text-left w-[90%]">
                                    <label for="firstName" class="block mb-1 text-sm font-medium text-gray-900">First Name</label>
                                    <input type="text" name="email" id="email" class="bg-gray-100 focus:ring-fuchsia-700 border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter your first Name" required=""/>
                                </div><br/>

                                <div class="text-left w-[90%]">
                                    <label for="lastName" class="block mb-1 text-sm font-medium text-gray-900">Last Name</label>
                                    <input type="text" name="email" id="email" class="bg-gray-100 focus:ring-fuchsia-700 border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter your Last Name" required=""/>
                                </div><br/>

                                <div class="text-left w-[90%]">
                                    <label for="username" class="block mb-1 text-sm font-medium text-gray-900">Username</label>
                                    <input type="text" name="email" id="email" class="bg-gray-100 focus:ring-fuchsia-700 border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter your Last Name" required=""/>
                                </div><br/>

                                <div class="text-left w-[90%]">
                                    <label for="email" class="block mb-1 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-100 focus:ring-fuchsia-700 border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Email Address" required=""/>
                                </div><br/>

                                <div class="text-left w-[90%]">
                                    <label for="phoneNumber" class="block mb-1 text-sm font-medium text-gray-900">Phone number</label>
                                    <input type="tel" name="email" id="email" class="bg-gray-100 focus:ring-fuchsia-700  border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter your Phone Number" required=""/>
                                </div><br/>


                                <div class="text-left w-[90%]">
                                    <label for="" class="font-bold">Select your gender</label><br/>
                                    
                                    <span>Male</span>  <input type="radio" name="gender" id="" class=""/> &nbsp;  <span>Female</span>  <input type="radio" name="gender" id="gender" class="" required/> <br/>
                                </div><br/>

                                <div class="text-left w-[90%]">
                                    <label for="nationality" class="block mb-1 text-sm font-medium text-gray-900">Nationality</label>
                                    <input type="text" name="nationality" id="nationality" class="bg-gray-100 focus:ring-fuchsia-700 border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter your Nationality" required=""/>
                                </div><br/>


                                <div class="text-left w-[90%]">
                                    <p class="text-sm font-medium">Bio</p>
                                    <input type="text" name="bio" id="bio" class="border focus:border-fuchsia-700 focus:ring-fuchsia-700 bg-gray-100 focus:border-2 border-gray-700 text-gray-900 sm:text-sm rounded-lg block w-full outline-none h-[80px] p-2.5" placeholder="About 155 characters long" required=""/>
                                </div><br/>


                                <div class="text-left w-[90%]">
                                    <p class="text-sm font-medium">About</p>
                                    <textarea name="" id="about"  rows="5" class="focus:border-fuchsia-700  focus:ring-fuchsia-700 bg-gray-100 sm:text-sm w-[100%] focus:border-2 border outline-none border-gray-700 text-gray-900 p-2.5 rounded-[10px] resize-none"></textarea>
                                </div><br/>


                                <div class="text-left w-[90%]">
                                    <p class="text-sm font-medium">Birthday</p>
                                    <input type="date" name="date" id="date" class="rounded-[10px] focus:border-fuchsia-700 ring-1 focus:ring-fuchsia-700 focus:ring-1 sm:text-sm bg-fuchsia-300 p-2 outline-none"/>
                                </div><br/>


                                <div class="text-left w-[90%]">
                                    <label for="link" class="block mb-1 text-sm font-medium  text-gray-900">Link to showcase your works/expertise</label>
                                    <input type="text" name="link" id="link" class="bg-gray-100 border-[1px] outline-none focus:ring-fuchsia-700 focus:ring-1 focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter your Last Name" required=""/>
                                </div><br/><br/>


                                <div class="w-[90%] text-right">
                                    <button type="submit" class="bg-fuchsia-800  text-right rounded-[10px] font-bold text-white border-2 p-2  hover:border-fuchsia-900 hover:text-fuchsia-950 hover:bg-white transition-[linear-all-0.13s]">Save changes</button>
                                  </div>
                        </div>
                    </div>



            {/* <div class="border-2 border-green-500 h-[700px] w-[43vw] rounded-[15px]"> */}
        <div class="border-2 px-[20px] pt-[20px] w-[43vw] bg-fuchsia-200  h-fit pb-[50px]  rounded-[10px]">
            <div class="h-fit pb-[40px] rounded-[15px] bg-white p-[20px]">
                <p class="font-bold sm:text-sm text-[17px]">Change profile picture</p>
                <div class="bg-neutral-200 h-[230px] rounded-[10px] mt-[10px] p-[20px]">
                    <div class="h-[120px] w-[120px] rounded-[50%] border-2 border-black"></div>
                    <i class="fa-solid fa-camera text-[25px] relative bottom-[50px] left-[100px]"></i> <br/>

                        <button type="button" class="border-2 border-neutral-900 p-[5px] font-bold text-[13px] rounded-[7px]">
                        <i class="fas fa-trash-alt"></i> &nbsp;
                        Delete profile photo
                        </button><br/><br/><br/>
              </div>


                    <div class="bg-neutral-200 h-[140px] rounded-[10px] mt-[10px] p-[20px]">
                      
                        <button type="button" class="border-2 sm:text-sm border-neutral-900 p-[5px] font-bold text-[14px] rounded-[7px]">
                            <i class="fas fa-camera"></i> &nbsp;
                          Update cover photo
                        </button><br/><br/><br/>
                    </div><br/><br/>


                    <div class="text-left w-[90%]">
                        <label for="institution" class="mb-1 text-sm font-medium  text-gray-900 sm:text-sm">Name of institution</label>
                        <input type="text" name="institution" id="institution" class="bg-gray-100 border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter Name of Institution" required=""/>
                    </div><br/>

                    <div class="text-left w-[90%]">
                        <label for="qualification" class="block mb-1 text-sm font-medium  text-gray-900 sm:text-sm">Highest qualification(s)</label>
                        <input type="text" name="qualification" id="qualification" class="bg-gray-100 border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter highest qualification e.g Msc, PhD, etc" required=""/>
                    </div><br/>


                    <div class="text-left w-[90%]">
                        <label for="discipline" class="block mb-1 text-sm font-medium  text-gray-900 sm:text-sm">Discipline</label>
                        <input type="text" name="discipline" id="discipline" class="bg-gray-100 border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="discipline" required=""/>
                    </div><br/>


                    <div class="text-left w-[90%]">
                        <label for="resume" class="block mb-1 text-sm font-medium  text-gray-900 sm:text-sm">Upload your resume:</label>
                        <input type="file" name="resume" id="resume" class="bg-gray-100 border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-600 sm:text-sm rounded-lg block w-full p-2.5" accept=".pdf, .doc, .docx" required=""/>
                    </div><br/><br/>


                    <div class="text-left w-[90%]">
                        <label for="certifications" class="block mb-1 text-sm font-medium  text-gray-900 sm:text-sm">Upload your certificate(s)</label>
                        <sub class="font-bold text-green-700 mt-[-16px]">Any certificate that shows your expertise</sub>
                        <input type="file" name="certificate" id="certificate" class="bg-gray-100 border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-600 sm:text-sm rounded-lg block w-full p-2.5" accept=".pdf, .doc, .docx, .jpg, .pdf, .word" required=""/>
                    </div><br/>

                    <div class="text-left w-[90%]">
                      <input type="file" name="certificate" id="certificate" class="bg-gray-100 border outline-none focus:border-fuchsia-700 focus:border-2 border-gray-500 text-gray-600 sm:text-sm rounded-lg block w-full p-2.5" accept=".pdf, .doc, .docx, .jpg, .pdf, .word" required=""/>
                    </div><br/><br/>


                    <div class="w-[90%] text-right">
                      <button type="submit" class="bg-fuchsia-800 border-2 font-bold text-right rounded-[10px] text-white p-2  hover:border-fuchsia-900 hover:text-fuchsia-950 hover:bg-white transition-[linear-all-0.13s]">Save changes</button>
                    </div>
                </div>
            </div>
      </div>
</section>

    </>
  )
}

export default EditProfile