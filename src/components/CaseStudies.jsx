import './CaseStudies.css'

const cases = [
  {
    id: '01',
    title: 'Service Site',
    subtitle: 'Mountain Goats Climbing Gym',
    desc: 'A polished website for a local service provider: bookable climbing courses, gear rental, and memberships.',
    tags: ['UX Research', 'Visual Design', 'Figma'],
    color: '#c8f04a',
    placeholder: '🧗',
    href: 'https://mountaingoatsclimbinggym.netlify.app/',
  },
  {
    id: '02',
    title: 'Memory Game',
    subtitle: 'ChromaMatch Game',
    desc: 'An interactive memory tile game where the user watches a sequence of colored tiles light up, then must repeat the exact sequence in the correct order.',
    tags: ['Interaction Design', 'Accessibility', 'JS'],
    color: '#4af0c8',
    placeholder: '🃏',
    href: 'https://chromamatchmemorygame.netlify.app/',
  },
  {
    id: '03',
    title: 'DriveMatch',
    subtitle: 'E-Commerce Site',
    desc: 'A full e-commerce storefront focused on conversion, product clarity, and a seamless checkout flow.',
    tags: ['E-Commerce UX', 'Prototyping', 'React'],
    color: '#f04a9a',
    placeholder: '🚗',
    href: 'https://drivematchecommercesite.netlify.app/'
  },
  {
    id: '04',
    title: 'Analytics Dashboard',
    subtitle: 'Data visualization',
    desc: 'A data-rich dashboard translating complex metrics into clear, actionable visual insights.',
    tags: ['Data Viz', 'Dashboard Design', 'BI'],
    color: '#f0a84a',
    placeholder: '📊',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="cs-section">
      <div className="container">

        <p className="section-label">03 — Work</p>
        <div className="accent-line" />

        <div className="cs-header-row">
          <h2 className="cs-heading">Case Studies</h2>
          <p className="cs-note">
            Designs in progress. Check back as the semester unfolds.
          </p>
        </div>

        <div className="row g-4">
          {cases.map((c) => (
            <div key={c.id} className="col-md-6">
              <div className="cs-card">
                {/* Placeholder visual */}
                <div className="cs-thumb" style={{ '--card-accent': c.color }}>
                  <span className="cs-emoji" role="img" aria-label={c.title}>{c.placeholder}</span>
                  {c.title !== 'Service Site' && c.title !== 'Memory Game' && c.title !== 'DriveMatch' && (
                    <span className="cs-coming-badge">Coming Soon</span>
                  )}
                </div>

                <div className="cs-body">
                  <div className="cs-meta">
                    <span className="cs-num">{c.id}</span>
                    <div className="cs-tags">
                      {c.tags.map((t) => (
                        <span key={t} className="cs-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  <h3 className="cs-title" style={{ color: c.color }}>{c.title}</h3>
                  <p className="cs-subtitle">{c.subtitle}</p>
                  <p className="cs-desc">{c.desc}</p>

                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs-btn"
                    >
                      View Project &nbsp;→
                    </a>
                  ) : (
                    <button className="cs-btn" disabled>
                      In Progress &nbsp;→
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}