import React from "react";

const SignInRegister = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center ">
      <div className="container mx-auto max-w-5xl bg-white p-8">
        <h1 className="text-2xl font-bold text-center mb-8">SIGN IN</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Login Section */}
          <div>
            <h2 className="text-[14px] font-semibold mb-4">Login</h2>
            <p className="mb-4 text-[12px] text-[#232323]">
              Please enter your email and password below to access your account
            </p>
            <form>
              <label className="block mb-2 text-[12px] text-[#232323] font-medium">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full max-w-lg px-4 py-2 border rounded-sm mb-4"
              />
              <label className="block mb-2 text-[12px] text-[#232323] font-medium">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full max-w-lg px-4 py-2 border rounded-sm mb-4"
               
              />

              {/* Button and Lost Password in a Row */}
              <div className="flex items-center justify-normal">
                <button className="bg-white text-[#232323] font-bold text-[14px] py-2 px-6 border border-black rounded-sm mr-2">
                  SIGN IN
                </button>
                <a href="#" className="text-[12px] text-[#232323] underline">
                  Lost your password?
                </a>
              </div>
            </form>
          </div>

          {/* Register Section */}
          <div className="bg-gray-50 p-6 rounded-sm max-w-5xl">
            <h2 className="text-[14px] font-semibold mb-4">Register</h2>
            <p className="mb-4 text-[12px] text-[#232323]">Please register below to create an account</p>
            <form>
              <label className="block mb-2 text-[12px] text-[#232323] font-medium">First Name</label>
              <input
                type="text"
                className="w-full max-w-lg px-4 py-2 border rounded-sm mb-4"
             
              />
              <label className="block mb-2 text-[12px] text-[#232323] font-medium">Last Name</label>
              <input
                type="text"
                className="w-full max-w-lg px-4 py-2 border rounded-sm mb-4"
             
              />
              <label className="block mb-2 text-[12px] text-[#232323] font-medium">
                Your Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full max-w-lg px-4 py-2 border rounded-sm mb-4"
               
              />
              <label className="block mb-2 text-[12px] text-[#232323] font-medium">
                Your Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full max-w-lg px-4 py-2 border rounded-sm mb-4"
               
              />
              <button className="w-full bg-black text-white font-bold text-[14px] py-2 rounded-sm">
                CREATE AN ACCOUNT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInRegister;
