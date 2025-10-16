import React, { use } from "react";
import { Link } from "react-router";
import AuthContext from "../Context/AuthContext/AuthContext";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Please Login!</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
            Please Login
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
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <h6>
            New to website? please{" "}
            <Link
              className="text-blue-500 hover:underline  group-hover:vhover:text-blue-800"
              to={"/register"}
            >
              Register
            </Link>{" "}
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Login;
