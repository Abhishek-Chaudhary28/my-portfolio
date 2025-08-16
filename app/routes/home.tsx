import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-400 to-orange-400">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl px-8 py-12 flex flex-col items-center">
        <img
          className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover mb-6"
          src="/profile.jpg"
          alt="Profile"
        />
        <p className="text-gray-500 mb-1">Hello, I'm</p>
        <h1 className="text-4xl font-bold mb-1">Abhishek Chaudhary</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-6">
          Photographer | Trader | Python
        </h2>
        <div className="flex space-x-4 mb-6">
          <a
            href="/CV.pdf"
            className="px-6 py-2 border border-black rounded-full font-semibold hover:bg-black hover:text-white transition"
            download
          >
            Download CV
          </a>
          <a
            href="abhishekchaudhary28.edu@gmail.com"
            className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Contact Info
          </a>
        </div>
        <div className="flex space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/abhishek-pawan-chaudhary/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-500 hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Abhishek-Chaudhary28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-500 hover:text-gray-900 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </main>
  );
}
