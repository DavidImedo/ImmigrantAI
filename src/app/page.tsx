import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-8">
      {/* Hero Section */}
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to GlimmAI 🌎
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your global immigration assistant. Get expert guidance for visas, legal help, jobs, housing, and more—powered by AI.
        </p>
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-in"
            className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-3 text-white text-lg font-medium hover:bg-blue-700 transition"
          >
            Sign In with Email
          </Link>
          <Link
            href="/api/auth/signin/google"
            className="w-full sm:w-auto rounded-lg bg-red-500 px-6 py-3 text-white text-lg font-medium hover:bg-red-600 transition"
          >
            Continue with Google
          </Link>
          <Link
            href="/api/auth/signin/facebook"
            className="w-full sm:w-auto rounded-lg bg-blue-800 px-6 py-3 text-white text-lg font-medium hover:bg-blue-900 transition"
          >
            Continue with Facebook
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-xl font-semibold mb-2">Visa Support</h3>
          <p className="text-gray-600">Find the right visa and get expert AI guidance step by step.</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-xl font-semibold mb-2">Legal Help</h3>
          <p className="text-gray-600">Get legal advice, resources, and connect with trusted lawyers globally.</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-xl font-semibold mb-2">Jobs & Housing</h3>
          <p className="text-gray-600">Discover job offers, housing, and community support in your new country.</p>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Want full access?</h2>
        <p className="mb-6 text-gray-700">Subscribe to unlock premium features and 24/7 AI support.</p>
        <Link
          href="/subscribe"
          className="inline-block rounded-lg bg-green-600 px-8 py-3 text-white text-lg font-medium hover:bg-green-700 transition"
        >
          Subscribe Now
        </Link>
      </div>
    </div>
  );
}