function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Frameworks</h4>
          <a href="#next">Next.js</a>
          <a href="#nuxt">Nuxt.js</a>
          <a href="#gatsby">Gatsby</a>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <a href="#docs">Documentation</a>
          <a href="#guides">Guides</a>
          <a href="#blog">Blog</a>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Vercel Inc.</p>
      </div>
    </footer>
  )
}

export default Footer