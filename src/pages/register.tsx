import Link from "next/link";
import React, {useState} from "react";
 

// layout for page

import Auth from "../components/layouts/Auth";

export default function Register() {
  const [hidden, setHidden] = useState("hidden: true");
  return (
    <>
      <Auth>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-[#E2E8F0] border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-[#64748B] text-sm font-bold">
                      Sign up with
                    </h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="bg-white active:bg-[#F8FAFC] text-[#334155] font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img alt="..." className="w-6 mr-1" src="/img/google.svg" />
                      Google
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-[#CBD5E1]" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-[#94A3B8] text-center mb-3 font-bold">
                    <small>Or sign up with credentials</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-[#475569] text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-[#CBD5E1] text-[#475569] bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-[#475569] text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-[#CBD5E1] text-[#475569] bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-[#475569] text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-[#CBD5E1] text-[#475569] bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex flex-wrap mt-6 relative">
                      <div className="w-1/2">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-[#334155] ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-[#475569]">
                            I agree with the{" "}
                            <a
                              href="#pablo"
                              className="text-[#0EA5E9]"
                              onClick={(e) => e.preventDefault()}
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-[#0EA5E9]">
                          <Link href="/signin">
                            <a href="#pablo ">
                              I want to sign in!
                            </a>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-[#1E293B] text-white active:bg-[#475569] text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Create Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </Auth>
    </>
  );
}

