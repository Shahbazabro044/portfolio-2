// pages/service.js

export default function Service() {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Service Heading */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Our Services</h1>
          
          {/* Short Description */}
          <p className="text-lg text-gray-600 text-center mb-8">
            We offer a range of services designed to help businesses succeed in the digital world.
          </p>
  
          {/* Service Section */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Web Development</h2>
            <p className="text-gray-600 text-lg">
              Our team specializes in creating modern, responsive websites that are tailored to your business needs.
              Whether you're looking for a personal blog or a corporate website, we ensure that your website is functional,
              aesthetically pleasing, and user-friendly.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">SEO Optimization</h2>
            <p className="text-gray-600 text-lg">
              We provide SEO services that help improve your website's visibility on search engines like Google.
              By using the best SEO practices, we ensure that your website ranks higher, reaches more potential customers,
              and drives organic traffic.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-8 mt-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Digital Marketing</h2>
            <p className="text-gray-600 text-lg">
              Our digital marketing services help you reach your target audience through effective campaigns.
              From social media marketing to paid ads, we ensure that your business gains the online visibility it deserves.
            </p>
          </div>
        </div>
      </div>
    )
  }
  