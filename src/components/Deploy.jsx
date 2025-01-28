function Deploy() {
  return (
    <section className="deploy">
      <h2>Deploy in seconds</h2>
      <div className="deploy-content">
        <div className="deploy-text">
          <p>Push to deploy, preview changes, and go live with confidence.</p>
          <button className="primary-btn">Start Deploying</button>
        </div>
        <div className="deploy-demo">
          <div className="demo-window">
            <div className="window-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="window-content">
              <pre>
                <code>
                  $ git push vercel main
                  > Deploying...
                  > ✓ Production: https://your-site.vercel.app
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deploy