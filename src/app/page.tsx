import Header from "@/components/Header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white transition-all duration-700 ease-in-out">
          <h1 className="text-6xl font-extrabold tracking-tight mb-6">
            Welcome to Quantix Bank
          </h1>
          <p className="text-xl max-w-2xl text-center mb-10 transition-opacity duration-500 opacity-90 hover:opacity-100">
            Manage your finances effortlessly with cutting-edge technology and industry-leading security.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </section>

        <section className="py-20 bg-white text-center">
          <h2 className="text-4xl font-bold mb-8">
            About Quantix Bank
          </h2>
          <p className="text-lg text-gray-600 mx-auto max-w-3xl">
            At Quantix Bank, we believe in combining innovation with trust. Our mission is to provide seamless financial services while ensuring top-level security and customer satisfaction. We are here to help you succeed financially.
          </p>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white p-8 shadow-xl cursor-pointer rounded-lg hover:shadow-2xl transition duration-500 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4">Coming soon...</h3>
              <p className="text-gray-600">
                ...
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 text-white text-center transition-all duration-500 hover:bg-blue-700">
          <h2 className="text-4xl font-bold mb-6">
            Join Quantix Today
          </h2>
          <p className="text-lg mb-8">
            Open an account with us and experience the future of banking. Cutting-edge technology meets exceptional customer service.
          </p>
          <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            Sign Up Now
          </button>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">&copy; 2024 Quantix Bank. All rights reserved.</p>
          <p className="text-sm mt-4">
            <span className="font-semibold">Note:</span> Quantix Bank is a fictional bank created as a project for the portfolio of <a href="https://github.com/furyforev3r" className="text-blue-400 hover:underline">furyforev3r</a> on GitHub. This is not a real bank.
          </p>
        </div>
      </footer>
    </>
  )
}
