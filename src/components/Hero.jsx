import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-gradient"></div>
      <div className="hero-content">
        <h1>Your complete platform for the web.</h1>
        <p className="hero-subtitle">
          Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
        </p>
        <div className="hero-cta">
          <button className="primary-btn" onClick={() => navigate('/chat')}>
            Get Started
          </button>
          <button className="secondary-btn" onClick={() => navigate('/articles')}>
            Learn About Segmentation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero