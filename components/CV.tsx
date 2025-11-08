import React from 'react';

export default function CV() {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Curriculum Vitae</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        You can view or download my full CV below.
      </p>
      <div className="flex flex-col items-center">
        <a
          href="/dilrubatas.com/CV_DT.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mb-8"
        >
          Download CV (PDF)
        </a>
        <div className="w-full max-w-4xl">
          <iframe
            src="/dilrubatas.com/CV_DT.pdf"
            title="Dilruba Tas CV"
            className="w-full h-[800px] border border-gray-200 rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
} 