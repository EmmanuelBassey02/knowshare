// import React from 'react'
import React, { useState } from 'react'
import loginimage from '../../assets/loginimage.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import imgg from '../../assets/imgg.png'


function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); //state for success message
    const navigate = useNavigate();

     //Function to handle form submission
     const handleSubmit = (e) => {
        e.preventDefault(); //Prevents the default form submission behaviour


         //checks if password meets length requirements
     if (password.length < 8) {
        setMessage('Password must be at least 8 characters long.');
        return;
       }


       setMessage('Successful');
       console.log(email, password);


       //delay the navigation by two seconds (2000 milliseconds)
     setTimeout(() => {
        navigate('/homepage');
       }, 3000)
       
      }

  
  return (
   
    
       <>
       <div className='h-[65px] p-2 bg-fuchsia-700 px-[20px]'>
         <button onClick={() => navigate(-1)}
         className='h-[45px] w-[45px] text-center text-[26px] rounded-[10px] p-[5px] bg-slate-100 hover:bg-neutral-400'> 🔙</button>
        {/* <p className='text-white p-2 bg-slate-500 w-fit'>Back</p> */}
       </div>
          
            <div className="bg-black h-[100vh] pb-4 w-[100vw] py-[4vw] px-[4vw] flex flex-wrap md:flex-wrap gap-[25px] justify-center items-center align-middle">
                <div
                    className="sm:m-auto lg:h-[80vh] sm:mb-[10px] h-[130px] w-[30vw] md:w-[300px] md:h-[w-\[30vw\]] sm:h-[120px]  sm:w-[30vw] lg:w-[43vw]">
                    <img src={loginimage} alt="image" class="responsive-sm-none"/>
                </div>



                <div className=" h-[80vh] w-[90vw] md:w-[500px] lg:w-[40vw] text-center">
                    <h1 className="text-neutral-200 text-[30px] font-bold">Welcome Back!</h1>
                    <h2 className="text-[28px] text-neutral-300">We are <span className="text-fuchsia-500 font-bold">happy</span> to see
                        you back</h2><br/>

                                    {/* form  */}
                    <form onSubmit={handleSubmit} className="w-[100%] text-left">
                        <div className=" h-fit px-[8px] pl-[10vw] sm:pl-[0]  block sm:flex justify-center align-middle gap-[20px] text-center">
                            <button
                                className="pt-[8px]  gap-[10px] flex justify-center align-middle sm:w-[44vw] w-[70vw] h-[40px] sm:h-[45px] bg-transparent border-2 border-solid border-white rounded-[10px]">
                                <img src={imgg} alt="" className='w-[28px] h-[22px]'/>
                                <p className="text-white font-bold text-[14px]">Login with Google</p>
                            </button>


                            <button
                                className="pt-[8px] gap-[10px]  flex justify-center align-middle sm:w-[44vw] sm:mt-0 mt-[12px] w-[70vw] h-[40px] sm:h-[45px] bg-transparent border-2 border-solid border-white rounded-[10px]">
                                <i className="fa-brands fa-twitter  text-white text-[28px]"></i>
                                <p className="text-white font-bold text-[14px]">Login with Twitter</p>
                            </button>
                        </div>

                        <p className="text-neutral-400 px-[15px]  bg-black w-fit  m-auto relative top-[14px]">OR USE YOUR EMAIL</p>
                        <hr className="text-white"/> <br/>


                            <div>
                        {/* {message && <div className='success-message text-sm  bg-transparent text-green-400 '>{message}</div>} */}

                            <label for="" className="text-white text-left mb-[10px]">Email Address</label><br/>
                            <input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} 
                                className="pl-[10px] border-2 border-solid border-neutral-400 bg-transparent text-white mt-[10px] outline-none h-[40px]  w-[100%] rounded-[12px]"
                                placeholder="Enter your email address" required/> <br/> <br/>

          {message && <div className='success-message text-sm  bg-transparent text-red-500 '>{message}</div>}
                            <label for="" class="text-white text-left mb-[10px]">Password</label><br/>
                            <div className="h-[55px] flex justify-between gap-[-2px]">
       
                                <input type="password" name="" id="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                                    className="pl-[10px] border-2 border-solid border-neutral-400 border-r-0 bg-transparent text-white mt-[10px] outline-none h-[40px]  w-[80%] rounded-[12px] rounded-tr-none rounded-br-none"
                                    placeholder="Enter your Password" required/>
                    

                                <button type="button" id=""
                                    className="js-button bg-transparent mt-[10px] text-white h-[40px] text-[14px] font-bold border-2 border-neutral-400 border-l-0  w-[20%] rounded-[10px] rounded-tl-none rounded-bl-none"
                                    onclick="togglePasswordVisibility()"><span id="toggleText">Show</span>
                                </button>
                            </div>

                        </div> <br/>


                        <div className="flex justify-between">
                            <span>
                                <label for="" className="text-neutral-300">Remember me</label> &nbsp;
                                <input type="checkbox" name="" id="" className="border-none outline-none rounded-[3px]"/>
                            </span>


                            <Link to="/forgotpassword">
                                <p className="text-neutral-400 hover:underline hover:text-fuchsia-400">Forgot your Password?</p>
                            </Link>
                        </div> <br/>


                        <button className="bg-fuchsia-600 rounded-[12px] border-none w-[85%] md:w-[440px] h-[45px] font-bold">Sign in</button> <br/>
                        
                        <p className="text-neutral-400 px-[15px]  bg-black w-fit  m-auto relative top-[14px]">CREATE AN ACCOUNT</p>
                        <hr className="text-white"/> <br/>
                    </form>
                </div>
            </div> 
    </>
  )
}

export default LoginPage