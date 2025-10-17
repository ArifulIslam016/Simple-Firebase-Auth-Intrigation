import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use, useState } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/Firebase.init";
import AuthContext from "../Context/AuthContext/AuthContext";

const Register = () => {
  const { createUser, SignInWithGoogle } = use(AuthContext);
  const [err, setErr] = useState();
  const handleRegister = (e) => {
    setErr("");
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //    console.log(name,email,password)
    //  const email=
    // createUserWithEmailAndPassword(auth,email,password).then(userInfo=>{
    //     console.log(userInfo.user)
    // }).catch(error=>{
    //     setErr(error.message)

    // })

    // CreateUser via context
    createUser(email, password)
      .then((user) => {
        console.log(user.user);
      })
      .catch((error) => {
        setErr(error.message);
      });
  };
  const handleGoogleSingIn = () => {
    SignInWithGoogle().then(res=>console.log(res)).catch(err=>(console.log(err)));
  };

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
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
            />
            {/* Email Section */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* Password Section */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
         
          <h6>
            Alreay Have an account? please{" "}
            <Link
              className="text-blue-500 hover:underline  group-hover:vhover:text-blue-800"
              to={"/login"}
            >
              Login
            </Link>{" "}
          </h6>
          {err && <p className="text-red-600">{err}</p>}
        </form>
         <button onClick={handleGoogleSingIn} className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
      </div>
    </div>
  );
};

export default Register;
