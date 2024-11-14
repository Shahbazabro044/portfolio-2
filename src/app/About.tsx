// pages/about.js

export default function About() {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* About Heading */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">About Us</h1>
          
          {/* Short Description */}
          <p className="text-lg text-gray-600 text-center mb-8">
            We are a small team of designers and developers passionate about building
            beautiful and functional websites that make a real impact.
          </p>
  
          {/* Section - Image & Text */}
          <div className="flex justify-center items-center gap-8">
            {/* Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team Member"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Text */}
            <div className="max-w-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is simple: to help businesses grow online by creating well-crafted, easy-to-navigate websites.
                We aim to create designs that are both functional and beautiful, bringing the best user experience to your customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  