import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background grid */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          <p className="hero-tag fade-up fade-up-1">
            <span className="tag-bracket">[</span>
            Software Engineer × UI/UX Student
            <span className="tag-bracket">]</span>
          </p>

          <h1 className="hero-name fade-up fade-up-2">
            Rime<br />
            <span className="hero-name--outline">Nasser Eddine</span><br />
          </h1>

          <p className="hero-sub fade-up fade-up-3">
            BASc Software Engineering @ uOttawa &mdash;
            building things that matter, one line at a time.
          </p>

          <div className="hero-actions fade-up fade-up-4">
            <a href="#case-studies" className="btn-primary-custom">View Work</a>
            <a href="#about" className="btn-ghost-custom">About Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}