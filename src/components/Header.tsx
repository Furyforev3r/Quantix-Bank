import Image from "next/image"
import Quantix from "@/public/Q.png"

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between p-4 bg-white shadow-md">
      <a href="#" className="flex items-center gap-1 bg-blue-600 transition-all p-3 rounded-lg">
        <Image src={Quantix} width={80} height={80} alt="Quantix" className="rounded-lg" unoptimized/>
        <h1 className="text-2xl text-white font-bold">Quantix Bank</h1>
      </a>
      <nav className="hidden md:flex flex-wrap space-x-4 md:space-x-8 mt-4 md:mt-0">
        <a href="#" className="text-gray-700 hover:text-blue-500 hover:underline transition-all">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500 hover:underline transition-all">
          Services
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500 hover:underline transition-all">
          About Us
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500 hover:underline transition-all">
          Contact
        </a>
      </nav>
      <div className="flex flex-wrap items-center space-x-4 mt-4 md:mt-0">
        <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-all">
          Login
        </button>
        <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-all">
          Sign Up
        </button>
      </div>
    </header>
  )
}
