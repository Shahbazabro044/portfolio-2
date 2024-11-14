// pages/contact.js

export default function Contact() {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Contact Heading */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
  
          {/* Short Description */}
          <p className="text-lg text-gray-600 text-center mb-8">
            If you have any questions or need assistance, feel free to reach out to us.
          </p>
  
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
            <form action="#" method="POST">
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
  
              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
  
              {/* Message Field */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                //   rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Type your message"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <div className="mb-4">
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  