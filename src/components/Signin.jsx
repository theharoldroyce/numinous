import React from 'react'
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className='w-full h-full bg-[#323232]'>
    <div className="sgn">
      <div className="sgncard">
        <h1 className="sgntitle">
          Get started today
        </h1>

        <form action="" className="sgnform">
          <p className="sgnsub">Sign in to your account</p>

          <div>
            <label className="sgnlbl">
              Email
            </label>

            <div className="relative mt-1">
              <input type="email" id="email" className="sgninp" placeholder="Enter email"/>
            </div>
          </div>

          <div>
            <label className="sgnlbl">
              Password
            </label>

            <div className="relative mt-1">
              <input type="password" id="password" className="sgninp" placeholder="Enter password"/>
            </div>
          </div>
          <button type="submit" className="sgnbtn">
            Sign in
          </button>
          <div className="mt-2 w-64 mx-auto">
          <button type="submit" className="sgnbtn">
            Login with Google
          </button>
          </div>

          <p className="text-center text-sm text-white"> No account?
           <Link to='/register'><button className="underline">
              Sign up
            </button></Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signin