// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Plant from '../img/signUp/p.png';

// export default function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email, password);
//     // Handle login logic

//     // Redirect to signup page after successful login
//     navigate('/signup');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='flex w-full h-screen'>
//         <div className='w-full lg:pt-12 flex items-center justify-center lg:w-1/2'>
//           <div className='bg-white pt-11 lg:pt-16 lg:ml-36 px-10 py-20 rounded-3xl'>
//             <h1 className='text-4xl'>LogIn</h1>
//             <div className='mt-8'>
//               <label className='text-lg font-medium'>Email Id: </label>
//               <input
//                 className='border-black-500 mt-1 bg-transparent w-full p-4 rounded-xl border-2'
//                 placeholder='Enter your email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <label className='text-lg font-medium'>Password: </label>
//               <input
//                 className='border-black-100 bg-transparent w-full p-4 rounded-xl border-2'
//                 placeholder='Enter your password'
//                 type='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               ></input>
//             </div>
//             <div>
//               <button className='text-red-600'>*Forgot password</button>
//               <div className='mt-8 flex flex-col gap-y-4'>
//                 <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-green-800 text-white text-lg font-bold py-3  rounded-xl'>
//                   LogIn
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='hidden relative lg:flex w-1/2 h-full items-center justify-center'>
//           <div className='w-70 h-70'>
//             <img src={Plant} className='pr-11 pr-2 size-96' />
//             <p className='pt-6 ml-10 items-center justify-between'>
//               Don't have an Account?{' '}
//               <button
//                 className='text-blue-700 cursor-pointer'
//                 onClick={() => navigate('/signup')}
//                 style={{ textDecoration: 'underline' }} // Add underline to signify clickability
//               >
//                 SignUp
//               </button>
//             </p>
//           </div>
//           <div className='w-full h-1/2 absolute bottom-0 bg-white/10'></div>
//         </div>
//       </div>
//     </form>
//   );
// }

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Plant from '../img/signUp/p.png';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // Handle login logic

    // Redirect to signup page after successful login
    navigate('/signup');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex w-full h-screen'>
        <div className='w-full lg:pt-12 flex items-center justify-center lg:w-1/2'>
          <div className='bg-white pt-11 lg:pt-16 lg:ml-36 px-10 py-20 rounded-3xl'>
            <h1 className='text-4xl'>LogIn</h1>
            <div className='mt-8'>
              <label className='text-lg font-medium'>Email Id: </label>
              <input
                className='border-black-500 mt-1 bg-transparent w-full p-4 rounded-xl border-2'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label className='text-lg font-medium'>Password: </label>
              <input
                className='border-black-100 bg-transparent w-full p-4 rounded-xl border-2'
                placeholder='Enter your password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <button className='text-red-600'>*Forgot password</button>
              <div className='mt-8 flex flex-col gap-y-4'>
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-green-800 text-white text-lg font-bold py-3  rounded-xl'>
                  LogIn
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden relative lg:flex w-1/2 h-full items-center justify-center'>
          
          <div className='w-70 h-70'>
            <div>
              <img src={Plant} className='pr-11 pr-2 size-96' />
            </div>
            <div>
              <p className='pt-5 ml-10 items-center justify-between'>
                Don't have an Account?{' '}
                <button
                className='text-blue-700'
                onClick={() => navigate('/SignUp')}
                style={{ textDecoration: 'underline' }} // Add underline to signify clickability
              >
                SignUp
              </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
