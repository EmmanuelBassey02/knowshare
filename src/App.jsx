// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/homepage/Home'
import Homepage from './pages/homepage/Homepage'
import ErrorPage from './pages/Landing-pages/error'
import Pricing from './pages/Landing-pages/pricing'
import Resources from './pages/Landing-pages/resources'
import Services from './pages/Landing-pages/services'
import LoginPage from './pages/auth/Login'
import SignupPage from './components/auth/Signup'
import ResetPassword from './components/auth/ResetPassword'
import ForgotPassword from './components/auth/ForgotPassword'
import EditProfile from './pages/profile-page/editProfile'
// import ScrollToTop from '../scrollToTop'
// import Dropdown from './components/dropdown/dropdown'
// import UserAgreement from './pages/Landing-pages/useragreement'
// import PrivacyPolicy from './pages/Landing-pages/privacypolicy'
// import ProfilePage from


function App() {

  

  return (
       <>
      <BrowserRouter>
      {/* <ScrollToTop/> */}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/homepage' element={<Homepage/>} />
      <Route path='/resources' element={<Resources/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/pricing' element={<Pricing/>} />
       <Route path='/login' element={<LoginPage />} />
       <Route path='/signup' element={<SignupPage />} />
       <Route path='/forgotpassword' element={<ForgotPassword />} />
       <Route path='/resetpassword' element={<ResetPassword />} />
       <Route path='/editprofile' element={<EditProfile />} />
       {/* <Route path='/useragreement' element={<UserAgreement />} /> */}
       {/* <Route path='/privacypolicy' element={<PrivacyPolicy />} /> */}


      <Route path='*' element={<ErrorPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
