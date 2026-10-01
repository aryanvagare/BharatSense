function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="tagline">
            AI-Powered Indian Language Analysis
          </p>

          <h1>
            Understand the <span>Indian Voice</span>
          </h1>

          <p className="description">
            BharatSense analyzes Indian social media text to understand
            language, sentiment, emotions, regional context and trends.
          </p>

          <a href="/analyze" className="primary-btn">
            Analyze Text →
          </a>
        </div>
      </section>

      <section className="features">
        <h2>What BharatSense Can Analyze</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Language</h3>
            <p>Detect Indian languages and Hinglish text.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">😊</div>
            <h3>Sentiment</h3>
            <p>Identify positive, negative and neutral opinions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">😡</div>
            <h3>Emotion</h3>
            <p>Understand emotions such as anger, joy and sadness.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Regional Analysis</h3>
            <p>Analyze opinions according to regional context.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Trends</h3>
            <p>Discover important patterns and emerging trends.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗣️</div>
            <h3>Hinglish</h3>
            <p>
              Understand the way Indians naturally mix Hindi and English.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home