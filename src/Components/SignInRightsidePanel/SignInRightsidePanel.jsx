import React from 'react';

function SignInRightsidePanel({ isOpen, onClose }) {
    if (!isOpen) return null; // Do not render if not open

    return (
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
            
            {/* Sign In Panel */}
            <div className="fixed top-0 right-0 w-[350px] lg:w-[410px] h-full bg-white shadow-lg z-40 p-6">
                <button onClick={onClose} className="absolute top-4 right-4 text-xl">✖</button>
                <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
                {/* Sign In Form */}
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-500 w-full px-3 py-2 rounded-sm"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="password">Password *</label>
                        <input
                            type="password"
                            id="password"
                            className="border border-gray-500 w-full px-3 py-2 rounded-sm"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-black border border-black text-white w-full py-2 rounded-sm hover:bg-white hover:text-black transition duration-200 ease-in-out"
                    >
                        LOG IN
                    </button>
                    <p className="text-center text-sm mt-4">
                        <a href="#" className="text-gray-600 hover:underline">Forgot your password?</a>
                    </p>
                </form>
                <div className="mt-4">
                    
                    <button className="bg-white border border-black text-black hover:bg-black hover:text-white w-full py-2 rounded-sm transition duration-200 ease-in-out">
                        CREATE ACCOUNT
                    </button>
                </div>
            </div>
        </>
    );
}

export default SignInRightsidePanel;
