function RegionalAnalysis() {
  return (
    <section className="dashboard">
      <h2>Regional Analysis</h2>

      <p>
        Explore sentiment and language patterns across different
        regions of India.
      </p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Madhya Pradesh</h3>
          <p>Neutral</p>
        </div>

        <div className="card">
          <h3>Maharashtra</h3>
          <p>Positive</p>
        </div>

        <div className="card">
          <h3>Delhi</h3>
          <p>Neutral</p>
        </div>

        <div className="card">
          <h3>Rajasthan</h3>
          <p>Positive</p>
        </div>
      </div>
    </section>
  )
}

export default RegionalAnalysis