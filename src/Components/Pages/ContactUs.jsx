import React from 'react'

const ContactUs = () => {
  return (
    <div>
    {/* Map Section */}
    <section className="w-full">
      <iframe
        className="w-full h-80 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.082474188949!2d-122.41941848468161!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a7d8e5e1d%3A0x6d437748b7f8e5b4!2sSan%20Francisco%2C%20CA%2094183%2C%20USA!5e0!3m2!1sen!2sin!4v1635253626860!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>

    {/* Contact Form Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch with Us</h2>
          <p className="text-lg text-gray-600">We would love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.</p>
        </div>

        {/* Contact Form */}
        <form
          action="#"
          method="post"
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
  )
}

export default ContactUs