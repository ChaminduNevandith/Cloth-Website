import React from "react";

const CreateAccount = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="container mx-auto max-w-lg  p-8">
        <h1 className="text-3xl font-bold text-center mb-[4]">
          Create Account
        </h1>
        <div>
          <p className="mb-6 text-[14px] text-[#232323] text-center">
            Please fill in the details below to create an account
          </p>
          <form>
            <label className="block mb-2 text-[14px] text-[#232323] font-medium">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-sm mb-6"
            />
            <label className="block mb-2 text-[14px] text-[#232323] font-medium">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-sm mb-6"
            />
            <label className="block mb-2 text-[14px] text-[#232323] font-medium">
              Your Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-sm mb-6"
            />
            <label className="block mb-2 text-[14px] text-[#232323] font-medium">
              Your Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border rounded-sm mb-6"
            />

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="subscribe" className="w-4 h-4" />
              <label htmlFor="subscribe" className="text-sm text-[#232323]">
                Subscribe To Email Marketing
              </label>
            </div>

            <div className=" mt-6">
              {" "}
              {/* Centered the button */}
              <button className="bg-black text-white font-bold text-[16px] py-3 px-8 rounded-sm">
                CREATE AN ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
