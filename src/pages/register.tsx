import Image from "next/image";
import Link from "next/link";
import Auth from "../components/layouts/Auth";

export default function Register() {
  return (
    <>
      <Auth>
        <div className="container mx-auto h-full px-4">
          <div className="flex h-full content-center items-center justify-center">
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-[#E2E8F0] shadow-lg">
                <div className="mb-0 rounded-t px-6 py-6">
                  <div className="mb-3 text-center">
                    <h6 className="text-sm font-bold text-[#64748B]">Sign up with</h6>
                  </div>
                  <div className="btn-wrapper text-center">
                    <button
                      className="mr-1 mb-1 inline-flex items-center rounded bg-white px-4 py-2 text-xs font-normal uppercase text-[#334155] shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-[#F8FAFC]"
                      type="button">
                      <Image
                        alt="..."
                        className="mr-1 w-6"
                        src="/img/google.svg"
                        width={36}
                        height={36}
                      />
                      &nbsp;Google
                    </button>
                  </div>
                  <hr className="border-b-1 mt-6 border-[#CBD5E1]" />
                </div>
                <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                  <div className="mb-3 text-center font-bold text-[#94A3B8]">
                    <small>Or sign up with email</small>
                  </div>
                  <form>
                    <div className="relative mb-3 w-full">
                      <label
                        className="mb-2 block text-xs font-bold uppercase text-[#475569]"
                        htmlFor="grid-password">
                        Name
                      </label>
                      <input
                        className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-[#475569] placeholder-[#CBD5E1] shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                        placeholder="Name"
                      />
                    </div>

                    <div className="relative mb-3 w-full">
                      <label
                        className="mb-2 block text-xs font-bold uppercase text-[#475569]"
                        htmlFor="grid-password">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-[#475569] placeholder-[#CBD5E1] shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                        placeholder="Email"
                      />
                    </div>

                    {/* <div className="relative w-full mb-3">
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
                    </div> */}
                    <div className="relative mt-6 flex flex-wrap">
                      {/* <div className="w-1/2">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-[#334155] ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          />
                          <span className="ml-2 text-sm font-semibold text-[#475569]">
                            I agree with the{" "}
                            <a
                              className="text-[#0EA5E9]"
                              onClick={(e) => e.preventDefault()}
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div> */}
                      <div className="w-[100%] text-right">
                        <span className="text-[#0EA5E9]">
                          <Link href="/signin">
                            <a>I want to sign in!</a>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <button
                        className="mr-1 mb-1 w-full rounded bg-[#1E293B] px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-[#475569]"
                        type="button">
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
