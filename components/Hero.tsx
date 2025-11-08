'use client'

import { AcademicCapIcon, BookOpenIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="mb-16">
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              src="/dilrubatas.com/profile.jpg"
              alt="Dilruba Tas - Academic Portrait"
              className="relative w-48 h-48 rounded-full mx-auto border-4 border-white/20 object-cover shadow-2xl backdrop-blur-sm"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Dilruba Tas
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 text-white/90 font-medium">
            Ph.D. Candidate in Political Science Department at the University of Florida
          </p>
          
          <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-5xl mx-auto leading-relaxed">
          I am a ViCS Predoctoral Fellow at the University of Florida, where I research gender and armed conflict, emotions, refugee studies, and the application of AI in conflict forecasting.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
          <a
            href="#research"
            className="group bg-white text-blue-900 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="flex items-center justify-center">
              View Research
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="group border-2 border-white text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <span className="flex items-center justify-center">
              Get in Touch
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group text-center p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-2xl inline-block mb-6">
              <AcademicCapIcon className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Research</h3>
            <p className="text-white/80 text-base leading-relaxed">
              International Security, Gender and Armed Conflict, Refugee Studies, Emotions, and AI Applications in Conflict Forecasting
            </p>
          </div>
          
          <div className="group text-center p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-4 rounded-2xl inline-block mb-6">
              <BookOpenIcon className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Teaching</h3>
            <p className="text-white/80 text-base leading-relaxed">
              TA Experience & Guest Lectures in Political Science and International Relations
            </p>
          </div>
          
          <div className="group text-center p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 p-4 rounded-2xl inline-block mb-6">
              <UserGroupIcon className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Collaboration</h3>
            <p className="text-white/80 text-base leading-relaxed">
              Open to Research Partnerships and Academic Collaborations
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 