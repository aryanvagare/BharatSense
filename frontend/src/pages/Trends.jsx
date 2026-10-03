function Trends() {
  return (
    <section className="dashboard">
      <h2>Sentiment Trends</h2>

      <p>
        Track sentiment patterns and emerging trends from
        analyzed Indian social media text.
      </p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Positive Trend</h3>
          <p>65%</p>
        </div>

        <div className="card">
          <h3>Negative Trend</h3>
          <p>20%</p>
        </div>

        <div className="card">
          <h3>Neutral Trend</h3>
          <p>15%</p>
        </div>

        <div className="card">
          <h3>Overall</h3>
          <p>Positive</p>
        </div>
      </div>
    </section>
  )
}

export default Trends