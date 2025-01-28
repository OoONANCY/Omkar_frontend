function Features() {
  return (
    <section className="features">
      <div className="features-grid">
        <div className="feature-card">
          <h3>
            <span className="icon">🌐</span>
            From localhost to https, in seconds.
          </h3>
          <p>Deploy from Git or your CLI.</p>
        </div>
        <div className="feature-card">
          <h3>
            <span className="icon">👥</span>
            Every deploy is remarkable.
          </h3>
          <p>Chat with your team on real, production-grade UI, not just designs.</p>
        </div>
        <div className="feature-card">
          <h3>
            <span className="icon">📊</span>
            Privacy-friendly, lightweight Analytics.
          </h3>
          <p>Upgrade your post-launch workflow with actionable, real-time insights.</p>
        </div>
        <div className="feature-card">
          <h3>
            <span className="icon">🔄</span>
            Instant Rollbacks
          </h3>
          <p>Go ahead, deploy on Friday. Instantly rollback to a working deployment.</p>
        </div>
      </div>
    </section>
  )
}

export default Features