import './About.css'

const skills = [
  'Python', 'Java', 'JavaScript', 'React', 'Node.js',
  'SQL / Neo4j', 'AWS / GCP', 'Docker', 'Power BI',
  'AI / ML', 'Git', 'Linux',
]

const stats = [
  { value: '9.31', label: 'CGPA / 10' },
  { value: '3×', label: 'Excellence Award' },
  { value: '2', label: 'Co-ops Completed' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Section label */}
        <p className="section-label">01 — About</p>
        <div className="accent-line" />

        <div className="row gy-5 align-items-start">

          {/* Left column: bio */}
          <div className="col-lg-6">
            <h2 className="about-heading">
              Trilingual engineer<br />
              with a design eye.
            </h2>
            <p className="about-body">
              I'm <strong>Rime Nasser Eddine</strong>, a Software Engineering student at the
              University of Ottawa (2024–2029) with a CGPA of 9.31/10 and three consecutive
              Recognition of Excellence awards.
            </p>
            <p className="about-body">
              I speak <span className="highlight">English, French, and Arabic</span> fluently,
              which shapes how I think about communication in design.
              I care deeply about building things that are both technically robust and genuinely
              human-centered.
            </p>
            <p className="about-body">
              Outside of code, I'm drawn to systems thinking, data visualization, and the
              intersection of AI with everyday experiences. I'm currently exploring UI/UX design
              as part of my Software Engineering curriculum at uOttawa.
            </p>

            {/* Contact links */}
            <div className="about-links">
              <a href="https://www.linkedin.com/in/rime-nasser-eddine" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="https://github.com/Rime6" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="mailto:rnass026@uottawa.ca">
                Email ↗
              </a>
            </div>
          </div>

          {/* Right column: stats + skills */}
          <div className="col-lg-5 offset-lg-1">

            {/* Stats */}
            <div className="stats-row">
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="skills-block">
              <p className="skills-title">Tech Stack</p>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}