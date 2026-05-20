import './HowIWork.css'

const steps = [
  {
    num: '01',
    title: 'Understand',
    body: 'I start by deeply understanding the problem (who the users are, what they need, and what constraints exist). Good design solves real problems.',
  },
  {
    num: '02',
    title: 'Research & Ideate',
    body: 'I explore existing solutions, reference design systems, and sketch multiple directions before committing to one. Inspired by Nielsen Norman Group\'s principles of user-centered design.',
  },
  {
    num: '03',
    title: 'Build & Iterate',
    body: 'I build iteratively, starting with low-fidelity wireframes, moving to high-fidelity prototypes, and refining based on feedback. I apply visual communication principles: hierarchy, contrast, balance, and scale.',
  },
  {
    num: '04',
    title: 'Ship & Reflect',
    body: 'I deploy, gather real feedback, and document what worked and what didn\'t. Every project is a learning artifact.',
  },
]

const resources = [
  { label: 'Nielsen Norman Group', url: 'https://www.nngroup.com/' },
  { label: 'Interaction Design Foundation', url: 'https://www.interaction-design.org/' },
  { label: 'SEG 3125 — UI Design @ uOttawa', url: 'https://www.uottawa.ca' },
]

export default function HowIWork() {
  return (
    <section id="how-i-work" className="hiw-section">
      <div className="container">

        <p className="section-label">02 — Process</p>
        <div className="accent-line" />

        <div className="row gy-5 align-items-start">

          <div className="col-lg-4">
            <h2 className="hiw-heading">How I<br />Work.</h2>
            <p className="hiw-intro">
              I'm currently in the <strong>SEG 3125 UI Design course</strong> at the University
              of Ottawa, where I'm learning user-centered design principles, visual communication,
              and prototyping methodologies.
            </p>
            <p className="hiw-intro">
              My engineering background means I approach design with a systems mindset, always
              thinking about edge cases, accessibility, and scalability from the start.
            </p>

            <div className="resources-block">
              <p className="resources-title">Learning Resources</p>
              {resources.map((r) => (
                <a key={r.label} href={r.url} target="_blank" rel="noreferrer" className="resource-link">
                  <span className="resource-arrow">→</span> {r.label}
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-7 offset-lg-1">
            <div className="steps-list">
              {steps.map((step, i) => (
                <div key={step.num} className="step-card" style={{ animationDelay: `${i * 0.12}s` }}>
                  <span className="step-num">{step.num}</span>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-body">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}