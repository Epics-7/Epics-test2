// import React, { Component, useState } from "react";
// import Form from './Form'
// import Plant from '../img/signUp/p.png'
// import { Link } from "react-router-dom";

// const SignUp = () => {
  
//   return (
//     <div className='flex w-full h-screen '>
//       <div className='w-full lg:pt-12  flex items-center justify-center lg:w-1/2'>
//       <Form/>
//       </div>
//       <div className=' hidden relative lg:flex w-1/2 h-full items-center justify-center '>
//       <div className='w-65 h-65 pr-11'>
//         <img src={Plant} className="pr-2 size-96"/>
//         <p className='pt-6 ml-10 items-center justify-between'>Already have an Account? <span className='text-blue-700 cursor-pointer'><Link to="/login">LogIn</Link></span></p>
//         {/* <Link to={'/login'} className='text-[#696c6d] hover:text-primary transition'>LogIn</Link> */}
//       </div>
//       <div className='w-full h-1/2 absolute bottom-0 bg-white/10 '>
      
//       </div>
//       </div>
//     </div>
//   )
// }

// export default SignUp

import React, { Component, useState } from "react";
import Form from './Form'
import Plant from '../img/signUp/p.png'
import { Link } from "react-router-dom";

const SignUp = () => {
  
  return (
    <div className='flex w-full h-screen ' style={{position: "relative",
      top: "31px", }}>
      <div className='w-full lg:pt-12  flex items-center justify-center lg:w-1/2'>
      <Form/>
      </div>
      <div className=' hidden relative lg:flex w-1/2 h-full items-center justify-center ' style={{position: "relative",
    top: "20px",}}>
      <div className='w-65 h-65 pr-11'>
        <img src={Plant} className="pr-2 size-96"/>
        <p className='pt-6 ml-10 items-center justify-between'>Already have an Account? <span className='text-blue-700 cursor-pointer'><Link to="/login">LogIn</Link></span></p>
        {/* <Link to={'/login'} className='text-[#696c6d] hover:text-primary transition'>LogIn</Link> */}
      </div>
     
      </div>
    </div>
  )
}

export default SignUp