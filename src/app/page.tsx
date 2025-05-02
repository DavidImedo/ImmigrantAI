// File: src/app/page.tsx

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left side: Hero section */}
      <div className="flex-1 bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col justify-center items-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to GlimmAI!</h1>
        <p className="text-lg mb-6 text-center max-w-md">
          Your Ultimate Immigration AI Assistant – Get help with visas, legal support, jobs, housing, and more.
        </p>
        <Link href="/chat">
          <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200 transition">
            Open Chat
          </button>
        </Link>
      </div>

      {/* Right side: Login section */}
      <div className="flex-1 flex justify-center items-center bg-gray-50">
        <div className="w-full max-w-sm bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-semibold text-center mb-6">Join GlimmAI Today!</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Sign In
            </button>
          </form>
          <div className="my-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <span className="text-xs text-center text-gray-500 uppercase">or continue with</span>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div className="flex justify-around">
            <button className="p-2 border rounded hover:bg-gray-100 transition">
              <img src="/google-icon.svg" alt="Google" className="h-6 w-6" />
            </button>
            <button className="p-2 border rounded hover:bg-gray-100 transition">
              <img src="/facebook-icon.svg" alt="Facebook" className="h-6 w-6" />
            </button>
          </div>
          <p className="text-center text-sm mt-4">
            New to GlimmAI? <Link href="/signup" className="text-blue-600 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}