import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section>
      <div className="bg-[#323232] w-full h-full">
        <div className="regcard">
          <main className="regmain">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="regtitle">Register Here</h1>
              <form action="" className="regform">
                <div className="regfrd">
                  <label className="reglbl">First Name</label>
                  <input type="text" id="FirstName" name="first_name" className="regimp" />
                </div>

                <div className="regfrd">
                  <label className="reglbl">Last Name</label>
                  <input type="text" id="LastName" name="last_name" className="regimp" />
                </div>

                <div className="col-span-6">
                  <label className="reglbl">Email</label>
                  <input type="email" id="Email" name="email" className="regimp" />
                </div>

                <div className="regfrd">
                  <label className="reglbl">Password</label>
                  <input type="password" id="Password" name="password" className="regimp" />
                </div>

                <div className="regfrd">
                  <label className="reglbl">Password Confirmation</label>
                  <input  type="password" id="PasswordConfirmation" name="password_confirmation" className="regimp" />
                </div>

                <div className="col-span-6">
                  <label className="flex gap-4">
                    <input type="checkbox" id="MarketingAccept" name="marketing_accept" className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"  />
                    <span className="text-sm text-white">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="regfrd2">
                  <p className="text-sm text-white">
                    By creating an account, you agree to our{" "}
                    <span className="regspn">
                      terms & conditions
                    </span>{" "}
                    and{" "}
                    <span className="tregspn">privacy policy</span>
                    .
                  </p>
                </div>

                <div className="regfrd2">
                  <button className="regbtn"> Create an account </button>
                </div>
                <div className="regfrd2">
                  <p className="mt-4 text-sm text-white sm:mt-0">
                    Already have an account?
                    <Link to="/signin">
                      {" "}
                      <span className="regspn">Log in</span>
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default Register