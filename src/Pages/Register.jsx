import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../Firebase/Firebase.init';

const Register = () => {
    const [err,setErr]=useState();
   const handleRegister=(e)=>{
       setErr("")
       e.preventDefault()
       const name= e.target.name.value;
       const email= e.target.email.value;
       const password= e.target.password.value;
    //    console.log(name,email,password)
    //  const email=
    createUserWithEmailAndPassword(auth,email,password).then(userInfo=>{
        console.log(userInfo.user)
    }).catch(error=>{
        setErr(error.message)

    })
   }

    return (

 
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
           <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      
    </div>
      <div className="card-body">
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
            {/* Name Section */}
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" />
            {/* Email Section */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* Password Section */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
         <h6>Alreay Have an account? please <Link className='text-blue-500 hover:underline  group-hover:vhover:text-blue-800' to={'/login'}>Login</Link> </h6>
        {
            err && <p className='text-red-600' >{err}</p>
        }      
        </form>
      </div>
    </div>

    );
};

export default Register;