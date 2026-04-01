export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">

      {/* Header */}
      <header className="bg-slate-900 text-white px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-1">Zackary Di Dio</h1>
          <p className="text-slate-400 text-sm mb-4">Business Information Systems &amp; Analytics</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-300">
            <span>📍 Lithia, FL 33547</span>
            <a
              href="mailto:zackarydidio@usf.edu"
              className="hover:text-white underline underline-offset-2"
            >
              zackarydidio@usf.edu
            </a>
            <span>📞 863-608-1060</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-10">

        {/* Objective */}
        <section aria-labelledby="objective-heading">
          <h2
            id="objective-heading"
            className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 border-b border-slate-200 pb-2"
          >
            Objective
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Detail-oriented and analytical Business Information Systems student with strong skills in
            data analysis, SQL, and business intelligence tools. Passionate about leveraging data to
            drive strategic decisions and improve efficiency. Seeking an entry-level Data Analyst role
            to apply technical and business knowledge to real-world challenges.
          </p>
        </section>

        {/* Education */}
        <section aria-labelledby="education-heading">
          <h2
            id="education-heading"
            className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 border-b border-slate-200 pb-2"
          >
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">University of South Florida</h3>
                  <p className="text-slate-600 text-sm">
                    B.S. Business Information Systems &amp; Analytics
                  </p>
                </div>
                <span className="text-sm text-slate-400 whitespace-nowrap ml-4">
                  Expected 2027
                </span>
              </div>
              <p className="text-slate-500 text-sm mt-1">Currently a Junior</p>
            </div>
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">High School Diploma</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section aria-labelledby="experience-heading">
          <h2
            id="experience-heading"
            className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 border-b border-slate-200 pb-2"
          >
            Experience
          </h2>
          <div className="space-y-6">

            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-slate-900">Self-Employed — Vintage Clothing Reseller</h3>
                  <p className="text-slate-500 text-sm">Depop (Online)</p>
                </div>
                <span className="text-sm text-slate-400 whitespace-nowrap ml-4">2023 – Present</span>
              </div>
              <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                <li>Manage and operate an independent online store with 2,500+ items sold.</li>
                <li>Handle inventory sourcing, product photography, pricing strategy, and customer service.</li>
                <li>Maintain strong seller ratings through consistent communication and fast fulfillment.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-slate-900">Pizza Cook &amp; Dishwasher</h3>
                  <p className="text-slate-500 text-sm">Local Pizzeria</p>
                </div>
                <span className="text-sm text-slate-400 whitespace-nowrap ml-4">High School</span>
              </div>
              <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                <li>Began as a dishwasher and was promoted to pizza cook based on reliability and work ethic.</li>
                <li>Prepared pizzas and managed orders during high-volume service hours.</li>
                <li>Responsible for closing and sanitizing the station nightly.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Projects */}
        <section aria-labelledby="projects-heading">
          <h2
            id="projects-heading"
            className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 border-b border-slate-200 pb-2"
          >
            Projects
          </h2>
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-slate-900">Retail Sales Data Analysis</h3>
                <p className="text-slate-500 text-sm">University Project</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
              <li>Analyzed sales trends using SQL and Tableau to identify revenue drivers.</li>
              <li>Created interactive dashboards to visualize key performance indicators (KPIs).</li>
              <li>Presented findings to faculty, demonstrating strong analytical and communication skills.</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 border-b border-slate-200 pb-2"
          >
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-800 mb-2">Technical</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 inline-block"></span>
                  Data Analysis &amp; Visualization (Excel, Tableau, Power BI)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 inline-block"></span>
                  SQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 inline-block"></span>
                  Microsoft Office Suite
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 inline-block"></span>
                  Adobe Photoshop
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-800 mb-2">Professional</h3>
              <ul className="text-sm text-slate-700 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 inline-block"></span>
                  Critical Thinking &amp; Problem Solving
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 inline-block"></span>
                  Teamwork &amp; Collaboration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 inline-block"></span>
                  Adaptability &amp; Resilience
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 inline-block"></span>
                  Active Listening &amp; Leadership
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section aria-labelledby="activities-heading">
          <h2
            id="activities-heading"
            className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 border-b border-slate-200 pb-2"
          >
            Activities &amp; Interests
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Committed to daily training in the gym as a means of personal growth, discipline, and
            continual self-improvement — values that carry into every professional endeavor.
          </p>
        </section>

      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-400 py-6 border-t border-slate-200 mt-4">
        <p>Zackary Di Dio · zackarydidio@usf.edu · 863-608-1060</p>
      </footer>

    </main>
  );
}