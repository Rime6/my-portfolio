import './About.css'

const skills = [
  'Python', 'Java', 'JavaScript', 'React', 'Node.js',
  'SQL / Neo4j', 'AWS / GCP', 'Docker',
  'AI / ML', 'Git/GitHub/GitLab', 'Linux', "Go", "Bash", 
  "HTML/CSS", "PowerShell", "Power Automate", "Power BI"
]

const stats = [
  { value: '9.31', label: 'CGPA / 10' },
  { value: '4×', label: 'Excellence Award' },
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
              Trilingual full-stack software developer
            </h2>
            <p className="about-body">
              I'm <strong>Rime Nasser Eddine</strong>, a Software Engineering student at the
              University of Ottawa (2024–2029) with a CGPA of 9.31/10, 2 previous co-op placements,
              and a lot of experience building full-stack web and mobile applications.
            </p>
            <p className="about-body">
              I speak <span className="highlight">English, French, and Arabic</span> fluently.
              My experience in my previous 2 co-op placements as well as in 3 hackathons has given me a strong foundation in leadership, learning and building new tools under tight deadlines, and trouble-shooting issues in code. 
            </p>
            <p className="about-body">
              I specialize in backend application development, AI integration and training, as well as complex database design. I'm currently exploring UI/UX design
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