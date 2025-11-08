import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contact
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          I'm always interested in hearing about new research opportunities, collaborations, 
          or questions about my work. Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <EnvelopeIcon className="w-6 h-6 text-blue-600 mr-4 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">dtas@ufl.edu</p>
                <p className="text-sm text-gray-500">I typically respond within 24-48 hours</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPinIcon className="w-6 h-6 text-blue-600 mr-4 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">University of Florida</p>
                <p className="text-gray-600">Gainesville, Florida</p>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div className="mt-8">
            <h4 className="font-semibold text-gray-800 mb-4">Professional Profiles</h4>
            <div className="space-y-3">
              <a
                href="https://github.com/dilrubatas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <span className="mr-2">GitHub</span>
                <span>→</span>
              </a>
              <a
                href="https://linkedin.com/in/dilruba-tas-40baa4192"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <span className="mr-2">LinkedIn</span>
                <span>→</span>
              </a>
              <a
                href="https://vics.lab.ufl.edu/vics-fellows/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <span className="mr-2">ViCS Lab Profile</span>
                <span>→</span>
              </a>
              <a
                href="https://scholar.google.com/citations?view_op=search_authors&mauthors=dilruba+tas&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <span className="mr-2">Google Scholar</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                required
              >
                <option value="">Select a topic</option>
                <option value="research">Research Collaboration</option>
                <option value="teaching">Teaching Opportunities</option>
                <option value="publications">Publications & Citations</option>
                <option value="conferences">Conferences & Events</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Research Collaboration */}
      <div className="mt-16 text-center">
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Research Collaboration
          </h3>
          <p className="text-gray-600 mb-6">
            I'm interested in collaborating on research projects related to conflict resolution, 
            refugee studies, gender and armed conflict, and AI applications in conflict forecasting. 
            My expertise includes applying machine learning and data science techniques to advance 
            our understanding of conflict dynamics and peace processes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">Conflict Resolution</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">Refugee Studies</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">Gender & Armed Conflict</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">AI in Conflict Forecasting</span>
            <span className="bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">Machine Learning</span>
          </div>
        </div>
      </div>
    </div>
  )
} 