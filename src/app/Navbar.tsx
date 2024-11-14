// components/Navbar.js

const Navbar = () => {
    return (
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-white text-2xl font-semibold">Shahbaz Abro</a>
  
          {/* Links */}
          <div className="space-x-6 text-white text-lg">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/about" className="hover:text-gray-300">About</a>
            <a href="/services" className="hover:text-gray-300">Services</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar;
  