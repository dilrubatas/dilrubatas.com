
const researchMethods = [
  "Machine Learning",
  "Conflict Data Analysis",
  "Statistical Analysis",
  "Case Studies",
  "Text-as-Data Analysis",
  "Survey Experimentation"
]

export default function Research() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Research
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          My research focuses on conflict studies, women in armed rebellion, and the application 
          of ML and AI in conflict forecasting. I explore the intersection of gender, emotions, 
          and armed conflict to understand complex international relations dynamics.
        </p>
      </div>

      {/* Dissertation Project */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Dissertation Project
        </h3>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-sm border border-blue-100">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
          The Emotional Battlefield: Mobilizing External Support for Insurgencies
          </h4>
          
          <div className="space-y-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Research Question</h5>
              <p className="text-gray-600">
                Why do some rebel groups garner international support by highlighting women's participation, 
                while others do not?
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Core Argument</h5>
              <p className="text-gray-600">
                The emotional resonance of gendered narratives is the missing mechanism linking women's visibility 
                in rebellion to external support. Rebel groups strategically frame women as humanitarian defenders, protectors, 
                or fighters to evoke specific emotions. The emotional responses 
                shape how international audiences perceive the group's legitimacy and influence their willingness 
                to offer support.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Theoretical Contribution</h5>
              <p className="text-gray-600">
                My dissertation addresses the gap in existing research by conceptualizing legitimacy as an emotionally 
                mediated belief constructed through rebel narratives on women and the symbolic power of women's 
                visibility in conflict. I develop a new framework that identifies emotion as the central mechanism 
                through which gendered portrayals shape judgments of legitimacy and subsequent support decisions 
                of external actors.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Research Methods</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h6 className="font-medium text-gray-800 mb-2">Survey Experiment</h6>
                  <p className="text-sm text-gray-600">
                    Vignette-based survey experiment measuring emotional reactions, legitimacy evaluations, 
                    and willingness to support rebel groups
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h6 className="font-medium text-gray-800 mb-2">Text-as-Data Analysis</h6>
                  <p className="text-sm text-gray-600">
                    Computational analysis of rebel narratives and portrayals of women in conflict using a novel dataset of rebel discourse on women
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h6 className="font-medium text-gray-800 mb-2">Machine Learning</h6>
                  <p className="text-sm text-gray-600">
                    Automated detection and classification of gendered narratives and emotional content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Research Methods */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Research Methods & Expertise
        </h3>
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {researchMethods.map((method, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-gray-700 font-medium text-sm">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 