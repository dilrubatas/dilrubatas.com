import { AcademicCapIcon, UserGroupIcon, BookOpenIcon, GlobeAltIcon } from '@heroicons/react/24/outline'


const courses = [
  {
    code: "CPO 2001: Introduction to Comparative Politics",
    title: "Teaching Assistant",
    level: "Undergraduate",
    semester: "Fall 2021",
    students: "Course Support",
    description: "Provided teaching assistance including teaching sections,grading assignments, holding office hours, and supporting student learning in comparative politics.",
    institution: "University of Florida"
  },
  {
    code: "INR 2001: Introduction to International Relations",
    title: "Teaching Assistant",
    level: "Undergraduate",
    semester: "Fall 2022, Spring 2022, Summer 2022",
    students: "Course Support",
    description: "Teaching assistant for multiple semesters, responsible for teaching sections, grading, holding office hours, and providing comprehensive academic guidance.",
    institution: "University of Florida"
  },
  {
    code: "IDS 2154: Sustainability Studies",
    title: "Teaching Assistant",
    level: "Undergraduate",
    semester: "Fall 2023",
    students: "Course Support",
    description: "Teaching assistant position, provided grading, office hours, and academic support for sustainability studies course.",
    institution: "University of Florida"
  }
]

const guestLectures = [
  {
    title: "International Security",
    level: "Graduate",
    description: "Guest lecturer covering contemporary issues in international security.",
    methods: ["Simulations", "Data Analysis"]
  },
  {
    title: "Gender, Data, and Conflict",
    level: "Undergraduate", 
    description: "Guest lecturer exploring the intersection of gender studies, data analysis, and armed conflict.",
    methods: ["Data Structure Analysis", "Case Studies"]
  },
  {
    title: "Nationalism and Conflict",
    level: "Graduate",
    description: "Guest lecturer examining nationalism dynamics and conflict resolution strategies.",
    methods: ["Simulations", "Data Analysis"]
  }
]

const teachingPhilosophy = `
My teaching philosophy emphasizes active learning through innovative methods including simulations 
and data structure analysis. I believe in creating engaging, interactive learning environments that 
combine theoretical knowledge with practical applications. My approach integrates real-world data 
and case studies to help students understand complex topics in international relations, security, 
and armed conflict.
`

export default function Teaching() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Teaching Experience
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          I am passionate about education and committed to fostering dynamic learning environments 
          through innovative teaching methods including simulations and data analysis.
        </p>
      </div>

      {/* Teaching Philosophy */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-sm border border-blue-100">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">Teaching Philosophy</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {teachingPhilosophy}
          </p>
        </div>
      </div>

      {/* Teaching Assistant Positions */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Teaching Assistant Experience
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {course.code}
                </span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {course.level}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {course.title}
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                {course.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{course.semester}</span>
                <div className="flex items-center">
                  <UserGroupIcon className="w-4 h-4 mr-1" />
                  <span>{course.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Lectures */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Guest Lectures
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guestLectures.map((lecture, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <GlobeAltIcon className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                  {lecture.level}
                </span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">
                {lecture.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                {lecture.description}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Teaching Methods:</p>
                <div className="flex flex-wrap gap-2">
                  {lecture.methods.map((method, methodIndex) => (
                    <span
                      key={methodIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Interested in Learning More?
          </h3>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing teaching opportunities, curriculum development, 
            or educational collaborations in international relations and comparative politics.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
} 