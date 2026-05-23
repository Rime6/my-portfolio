import './Hero.css'
import heroPicture from '../assets/1000147452 (1).jpeg'

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background grid */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          <div className="hero-divider" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-name fade-up fade-up-2">
                Rime<br />
                <span className="hero-name--outline">Nasser Eddine</span><br />
              </h1>

              <div className="hero-text">
                <p className="hero-sub fade-up fade-up-3">
                  BASc Software Engineering at the University of Ottawa
                </p>

                <div className="hero-actions fade-up fade-up-4">
                  <a href="#case-studies" className="btn-primary-custom">View Projects</a>
                  <a href="#about" className="btn-ghost-custom">About Me</a>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <img src={heroPicture} alt="Rime Nasser Eddine" className="hero-picture fade-up fade-up-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}