import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (

 
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
           <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      
    </div>
      <div className="card-body">
        <form>
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
        </form>
      </div>
    </div>

    );
};

export default Register;