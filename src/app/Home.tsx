// pages/index.js

export default function Home() {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 flex items-center">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              I AM SHAHBAZ ABRO
            </h1>
            <p className="text-lg text-gray-600 mb-6">
            Hi, I'm a passionate Frontend Developer with a focus on creating intuitive and user-friendly websites. I specialize in HTML, CSS, JavaScript, and React, and I'm always eager to learn new
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </a>
          </div>
{/* Right Side - Image */}
<div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XQPi_qaMVlJbtZKHM6FD7eCMIvg77-Xg0A&s" 
    alt="Placeholder Image" 
    className="w-48 h-48 rounded-full object-cover shadow-lg"
  />
</div>


          
        </div>
      </div>
    )
  }
  