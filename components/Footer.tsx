export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dilruba Tas</h3>
            <p className="text-gray-300 mb-4">
              Ph.D. Candidate in Political Science<br />
              ViCS Predoctoral Fellow<br />
              University of Florida
            </p>
            <p className="text-gray-400 text-sm">
              Researching gender and armed conflict, refugee studies, and AI applications in conflict forecasting.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#research" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Research
                </a>
              </li>
              <li>
                <a 
                  href="#teaching" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Teaching
                </a>
              </li>
              <li>
                <a 
                  href="#cv" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  CV
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium">Email:</span><br />
                dtas@ufl.edu
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Location:</span><br />
                University of Florida<br />
                Gainesville, Florida
              </p>
            </div>
            
            <div className="mt-4 flex space-x-4">
              <a
                href="https://linkedin.com/in/dilruba-tas-40baa4192"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://scholar.google.com/citations?view_op=search_authors&mauthors=dilruba+tas&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Google Scholar"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
              </a>
              <a
                href="https://vics.lab.ufl.edu/vics-fellows/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="ViCS Lab"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dilruba Tas. All rights reserved. | 
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
} 