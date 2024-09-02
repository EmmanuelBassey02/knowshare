import React from 'react'
import { Link } from 'react-router-dom'
import imggg from '../../assets/imggg.png'
import smedia from '../../assets/smedia.png'
import search from '../../assets/search.jpg'
import analytics from '../../assets/analytics.jpg'
import monetization from '../../assets/monetization.jpg'
import eduimg from '../../assets/eduimg.png'
import design from '../../assets/design.png'
import phone from '../../assets/phone.png'
import globe from '../../assets/globe.png'
import sectiontwo from '../../assets/sectiontwo.jpg'
import finalimage from '../../assets/finalimage.jpg'
import livestream from '../../assets/livestream.jpg'
import directmessage from '../../assets/directmessage.jpg'
import trending from '../../assets/trending.jpg'
import profilecreation from '../../assets/profilecreation.jpg'
import imgg1 from '../../assets/imgg1.jpg'
import img6 from '../../assets/img6.jpg'
import img9 from '../../assets/img9.jpg'
import Navbar from '../../components/navbar/navbar'

function Home() {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    
  return (
    <>
    <Navbar/>
       <div className="bg-gradient-to-r from-black via-fuchsia-950 to-black pb-[60px]  h-fit md:pt-[50px] pt-[30px] px-[4vw]">

            <div className="flex flex-wrap justify-between align-middle md:gap-[20px] px-[8px] pl-[15px] rounded-[15px] pb-[15px] pt-[15px] bg-black">
                <div class="hero sm:90vw md:w-[45vw] w-[90vw] h-fit">
                    <h1 className="h1-section-one text-fuchsia-400 text-[30px] font-semibold">Know<span
                            class="share text-neutral-200">Share!</span> </h1>
                    <h1 class="text-neutral-200 md:text-[42px] text-[26px] mt-[20px]  font-semibold">A social media
                        platform dedicated to knowledge sharing and Learning</h1> <br/>


                    <p className="text-fuchsia-200 sm:text-[15px] md:text-[22px] text-[22px]">
                        A world of knowledge awaits, waiting to be shared and explored. Connect with experts, discover new
                        ideas, and share your own insights. The journey to enlightened minds start here.<br/>
                    </p><br/>

                    <button className="get-started h-[45px] w-[130px] rounded-[20px] bg-fuchsia-500 text-black border-none font-bold text-[16px] hover:text-fuchsia-500 hover:border-2 hover:border-solid border-fuchsia-500
                    hover:bg-black hover:transition-all hover:ease-linear transition-[0.16s]">Get Started</button>
                </div>

                        <img src={imggg} alt="" className="md:h-[370px] text-center opacity-80 sm:w-[350px]  sm:h-[230px] md:w-[490px] sm:m-auto "/>
                </div>



                {/* SECTION ONE - B  */}
               
            <section class="h-fit pt-[35px] px-[1vw] md:px-[5vw] ">
                <p class="font-mono text-neutral-200 md:text-[36px] text-[22px]">....SOCIALIZE, LEARN, GROW, EARN,
                    SUCCEED....</p>
            </section>
      </div>



                    {/* SECTION TWO  */}
            <section className='px-[3vw]  bg-black h-fit md:pb-[80px] pb-[40px] lg:pt-[90px] md:pt-[70px] pt-[40px] text-center' >
                    <h1 className='md:text-[55px] text-[26px] text-fuchsia-200 font-bold'>Where the world meet and share knowledge</h1><br />
                    <p className='md:text-[25px] text-[15px] text-neutral-300'>Fostering a Global Symposium: A Convergence of Perspectives, Wisdom, and Curiosity—Where the Global Community Unites to Exchange and Illuminate the Boundless Realms of Knowledge Together</p><br />


                    <div className='md:h-[400px] h-[180px]  md:w-[70vw] w-[94vw] 2xl:w-[1480px] md:mt-[10px]  mt-[5px] m-auto  '>
                        <img src={sectiontwo} alt="" className='h-[100%] w-[100%]'/>
                    </div>
            </section>


           

                <section className='px-[3vw] md:pt-[80px] text-center pt-[40px] pb-[40px] md:pb-[80px] bg-gradient-to-r from-black to-fuchsia-950'>
                        <h2 className='text-white font-bold md:text-[45px] text-[24px] m-auto'>Connecting the world with calls, chats, and knowledge.</h2><br />

                        <h3 className='text-fuchsia-200 text-[18px] md:text-[26px] w-[80vw]   text-center m-auto '><span className='text-[30px]'>"</span>Join the movement for a global nexus of Knowledge exchange,  Engaging conversations, Crystal-clear calls, and so much more!<span className='text-[30px]'>"</span></h3><br /><br />

                        <div className='flex flex-wrap justify-center gap-[10%] '>
                            <img src={phone} alt=""  className='md:w-[340px] sm:m-auto md:h-[620px] w-[180px] h-[330px] mt-[50px] '/>
                            <img src={globe} alt="" className='md:w-[600px] w-[310px] h-[310px] md:h-[600px] mt-[50px] opacity-50'/>
                        </div>

                </section>






                {/* What's different about Knowshare?  */}
            <section class="bg-fuchsia-50  px-[4vw] h-fit md:py-[50px] py-[30px] md:pt-[60px] pt-[33px]">
               <h1 class="text-black md:text-[34px] text-[26px] font-bold m-auto w-fit">What's different about KnowShare?</h1> <br/><br/>

                <div  class="py-[12px] h-fit flex flex-wrap gap-[10px] justify-center align-middle">
                    <div class="shadow border-2 mb-4  border-black w-[280px] h-[360px] p-[10px] rounded-[15px]">
                        <div class="w-[260px] flex justify-center align-middle gap-[3px] h-[180px]  m-auto rounded-[15px]">
                            <img src={profilecreation} alt="" className='h-full w-inherit rounded-[15px]'/>
                        </div><br/>
                        <h2 class="font-bold text-[20px]">Profile creation & customization</h2>
                        <p class="text-fuchsia-950 text-[14px]">Discover our world leading AI learning library</p>
                        <p class="text-[12px] font-bold mt-[10px]">Explore the library &nbsp; <i class="fas fa-arrow-right"></i></p>
                    </div>


                    <div class="shadow border-2 mb-4  border-black w-[280px] h-[360px] p-[10px] rounded-[15px]">
                        <div class="w-[260px] h-[180px]  m-auto rounded-[15px]">
                        <img src={directmessage} alt="" className='h-full  w-[inherit] rounded-[15px]'/>
                        </div><br/>
                        <h2 class="font-bold text-[20px]">Direct Messaging & Group chat</h2>
                        <p class="text-fuchsia-950 text-[14px]">Discover our world leading AI learning library</p>
                        <p class="text-[12px] font-bold mt-[10px]">Explore the library &nbsp; <i class="fas fa-arrow-right"></i></p>
                    </div>

                    <div class="shadow border-2 mb-4  border-black w-[280px] h-[360px] p-[10px] rounded-[15px]">
                        <div class="w-[260px] h-[180px] b m-auto rounded-[15px]">
                            <img src={livestream} alt="" className='h-[179px] w-[inherit] rounded-[15px]'/>
                        </div><br/>
                        <h2 class="font-bold text-[20px]">Livestream, Audio & Video call</h2>
                        <p class="text-fuchsia-950 text-[14px]">Discover our world leading AI learning library</p>
                        <p class="text-[12px] font-bold mt-[10px]">Explore the library &nbsp; <i class="fas fa-arrow-right"></i></p>
                    </div>

                    <div class="shadow border-2 mb-4  border-black w-[280px] h-[360px] p-[10px] rounded-[15px]">
                        <div class="w-[260px] h-[180px]  m-auto rounded-[15px]">
                        <img src={trending} alt="" className='h-full w-inherit rounded-[15px]'/>
                        </div><br/>
                        <h2 class="font-bold text-[20px]">Trending topics & #HashTags</h2>
                        <p class="text-fuchsia-950 text-[14px]">Discover our world leading AI learning library</p>
                        <p class="text-[12px] font-bold mt-[10px]">Explore the library &nbsp; <i class="fas fa-arrow-right"></i></p>
                    </div>
                </div>
          </section>



   

                    {/* EDUCATION HUB  */}
                    <section className='px-[5vw] md:pb-[50px] pb-[35px] h-fit md:pt-[100px] pt-[50px] text-center bg-black'>
                            <h1 className='md:text-[55px] text-[26px] text-white font-bold'>KnowShare's Education Hub</h1><br /> 
                            <img src={eduimg} alt="" className='m-auto'/> <br />
                            <p className='md:w-[70vw] w-[85vw] m-auto font-[400] text-neutral-300 md:text-[22px] text-[15px]'>Embark on an enriching journey of knowledge discovery, where curiosity knows no bounds, and every click opens doors to a world of insights, collaborations, and transformative learning experience -  
                            <span className='text-fuchsia-300 m-auto'> because in our educational haven, the pursuit of wisdom is a shared adventure, and the community is your guide to endless possibilities. <span className='md:text-[40px] text-[28px]'>💡💡</span></span></p>
                            {/* <img src={design} alt="" className='relative md:top-[-520px] top-[-490px] md:h-[220px] h-[100px] w-[100px] md:w-[220px] opacity-70'/> */}
                    </section> 


                    


                {/* KNOWSHARE SOCIAL FEATURES  */}
                <section className="px-[5vw] lg:pt-[85px] md:pt-[65px] pt-[40px] pb-[50px]  font-bold text-center bg-fuchisa-200 bg-fuchsia-100 h-fit">
                        <h1 className='md:text-[42px] text-[26px]'>KnowShare Social Network Features</h1><br/>
                        <p className='text-neutral-700 text-[18px]'>Unleash Powerful Social Network Features with knowShare community: Build, Connect, Engage & Retain your community</p> <br /> <br />

                        <div className='flex flex-wrap justify-center align-middle gap-[60px] lg:mt-[30px] rounded-[20px] px-[15px] shadow'>
                            <img src={smedia} alt="" className='md:h-[450px] h-[290px] m-auto md:m-[1px] w-[380px] md:w-[500px] mt-[-40px] rounded-[20px]'/>

                          <div className='md:mt-[40px] mt-[10px] text-left h-[300px] w-[500px]'>
                            <h1 className='md:text-[32px] text-[24px] text-neutral-800'>Amplify Engagement</h1><br />
                            <p className='text-neutral-600'>Boost your community's interaction with core features like Profiles, Friends, Following, Like, Share, Reactions, Activity Feeds, Chat, Live Streams, and more.</p><br />
                            <p className='text-neutral-600'>Ideal for cultivating a dynamic, engaged user base in both enterprise and personal settings.</p>
                          </div>
                        </div>




                     <div className='flex flex-wrap px-[15px] pb-[20px] justify-center align-middle gap-[30px] bg-neutral-900 rounded-[20px] mt-[60px]'>
                         <div className='mt-[60px] text-left h-[300px] w-[450px]'>
                             <h1 className='md:text-[32px] text-[24px] text-neutral-100'>Powerful search and discovery tools</h1><br />
                             <p className='text-neutral-400'>Help users find relevant content, people, and groups based on their interests, location, and other criteria. Advanced search algorithms and personalized recommendations can enhance the discovery experience.</p><br />
                         </div>

                         <img src={search} alt="" className='md:h-[300px] h-[265] w-[340px] md:w-[450px] md:mt-[30px] mt-[8px]   rounded-[20px]'/>
                    </div>
                </section>




                   {/* KNOWSHARE SOCIAL FEATURES 2 */}
                   <section className="px-[5vw] pt-[35px] pb-[50px] md:pb-[110px]  font-bold text-center bg-fuchisa-200 bg-fuchsia-100 h-fit">

                        <div className='flex flex-wrap justify-center align-middle gap-[60px] mt-[60px] px-[15px] pb-[20px]  rounded-[20px] shadow'>
                            <img src={analytics} alt="" className='md:h-[320px] h-[200px] w-[350px] md:w-[460px] mt-[-40px] rounded-[20px] shadow'/>

                          <div className=' text-left h-[300px] w-[500px]'>
                            <h1 className='md:text-[32px] text-[24px] text-neutral-800'>Comprehensive Analytics & Insight</h1><br />
                            <p className='text-neutral-600'>In the dynamic world of education, staying abreast of trending topics and hashtags is crucial for educators, learners, and enthusiasts alike.</p><br />
                            <p className='text-neutral-600'>#learning #growth #inspiration #explore #neverstoplearning </p>
                          </div>
                        </div>



                     <div className='flex flex-wrap justify-center align-middle px-[15px] pb-[20px] gap-[30px] mt-[60px] bg-neutral-900 rounded-[20px]'>
                         <div className='mt-[40px] text-left h-[300px] w-[450px]'>
                             <h1 className='md:text-[32px] text-[24px] text-neutral-100'>Content Sharing & Monetization</h1><br />
                             <p className='text-neutral-400'>Your knowledge and expertise are valuable assets. At Knowshare, we recognize your contributions and reward your efforts. Our monetization system allows you to earn rewards for your content, enabling you to turn your knowledge into a source of income.</p><br />
                         </div>

                         <img src={monetization} alt="" className='md:h-[300px] h-[200px] md:w-[450px] w-[380px] mt-[30px] rounded-[20px]'/>
                    </div>
                   </section>




                        {/* WHAT OUR USERS SAY  */}
              <section className="flex flex-wrap justify-center gap-[20px] text-center px-[3vw] md:px-[4vw] bg-fuchsia-100 lg:pt-[120px] md:pt-[100px] pt-[60px] pb-[20px]  md:pb-[140px]"><br />
                    <div className="border-2 border-solid mb-[110px] border-gray-700 w-[370px] md:h-[265px] h-[220px] rounded-[8px] bg-fuchsia-950">
                            <img src={img9} alt="image" className="bg-black md:w-[170px] w-[130px]  md:h-[170px] h-[130px] rounded-[50%] relative md:left-[160px] left-[100px] top-[-90px]"/>
                        <div className="md:w-[350px] w-[280px] md:h-[130px] h-fit m-auto md:mt-[-55px] mt-[-70px] bg-fuchsia-100 p-[8px]">
                            <p className="font-[500] text-[17px] text-left">"What sets KnowShare apart is the genuine sense of community. Not only having followers, but having a community that listens to you."</p>
                        </div>
                    </div>


                    <div className="border-2 border-solid mb-[110px] border-gray-700 w-[370px] md:h-[265px] h-[220px] rounded-[8px] bg-fuchsia-950">
                            <img src={imgg1} alt="image" className="md:w-[170px] w-[130px]  md:h-[170px] h-[130px] rounded-[50%] relative md:left-[160px] left-[100px] top-[-90px]"/>
                        <div className="md:w-[350px] w-[280px] md:h-[130px] h-fit m-auto md:mt-[-55px] mt-[-70px] bg-fuchsia-100 p-[8px]">
                            <p className="font-[500] text-[17px] text-left">"Discovering this platform has been a game-changer for me! I've never experienced such an engaging blend of socializing and knowledge-sharing. "</p>
                        </div>
                    </div>


                    <div className="border-2 border-solid mb-[110px] border-gray-700 w-[370px] md:h-[265px] h-[220px] rounded-[8px] bg-fuchsia-950">
                            <img src={img6} alt="image" className="md:w-[170px] w-[130px]  md:h-[170px] h-[130px] rounded-[50%] relative md:left-[160px] left-[100px] top-[-90px]"/>
                        <div className="md:w-[350px] w-[280px] md:h-[130px] h-fit m-auto md:mt-[-55px] mt-[-70px] bg-fuchsia-100 p-[8px]">
                            <p className="font-[500] text-[17px] text-left">"It's not just a social hub; it's a dynamic space where minds converge, and each interaction becomes an opportunity for personal growth."</p>
                        </div>
                    </div>
              </section>





                    {/* JOIN 2+ MILLIONS USERS  */}
                   <section className='h-fit py-[20px]   md:py-[35px] text-center bg-gradient-to-r from-black via-fuchsia-950 to-black pt-[35px] px-[4vw] md:px-[5vw] '>
                        <h1 className='font-mono text-neutral-200 md:text-[36px] text-[22px]'>JOIN 2+ MILLION USERS WHO LOVE KNOWSHARE</h1>
                    </section>




                    {/* Before footer section  */}
                    <section className='bg-black px-[3vw] md:py-[60px] py-[30px]'>
                        <img src={finalimage} alt=""  className='h-[260px] md:h-[350px] md:w-[350px] w-[260px] m-auto'/>
                    </section>


                        {/* MainHomepage and Editprofile */}
                    {/* <section className='bg-neutral-900 text-center text-neutral-500'>
                        <p>see  &nbsp; 
                            <Link onClick={scrollToTop} to="/homepage" className='hover:underline hover:text-fuchsia-500'> mainHomepage</Link></p>
                    </section> */}

                  
{/* 
                    <section className='bg-neutral-900 text-center text-neutral-500'>
                    <p>see &nbsp;  
                    <Link to="/editprofile" className='hover:underline hover:text-fuchsia-500'> Edit Profile</Link> page</p>
                    </section> */}



                    {/* <!-- Footer section  --> */}
                    <footer class="bg-black dark:bg-gray-900 px-[5vw]">
                <div class="mx-auto w-full max-w-screen-xl">
                    <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">Company</h2>
                            <ul class="text-gray-400 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class=" hover:underline">About Us</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Join our Team</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Brand Center</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Press & Media</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">Resources</h2>
                            <ul class="text-gray-400 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy policy</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Terms of service</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Service legal Agreement</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Service catalog</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Documentation</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Security</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">Legal</h2>
                            <ul class="text-gray-400 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Privacy Policy</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Licensing</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">Download</h2>
                            <ul class="text-gray-400 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">iOS</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Android</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">Windows</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                        <span class="text-sm text-gray-900  sm:text-center">© 2023 <a
                                href="https://flowbite.com/">KnowShare™</a>. All Rights Reserved.
                        </span>
                        <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-4 h-4 text-neutral-800" aria-hidden="true" xmlns="/" fill="currentColor"
                                    viewBox="0 0 8 19">
                                    <path fill-rule="evenodd"
                                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only ">Facebook page</span>
                            </a>


                            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-4 h-4 text-neutral-800" aria-hidden="true" xmlns="/" fill="currentColor"
                                    viewBox="0 0 21 16">
                                    <path
                                        d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                </svg>
                                <span class="sr-only">Instagram community</span>
                            </a>


                            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-4 h-4 text-neutral-800" aria-hidden="true" xmlns="/" fill="currentColor"
                                    viewBox="0 0 20 17">
                                    <path fill-rule="evenodd"
                                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Twitter page</span>
                            </a>
                            
                            <a href="#" class="text-gray-800 hover:text-gray-900">
                                <svg class="w-4 h-4 text-neutral-800" aria-hidden="true" xmlns="/" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Dribbble account</span>
                            </a>
                        </div>
                    </div>
                </div>
                    </footer>

             </>
  )
}

export default Home