function Dashboard() {
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>

      <p>
        Welcome to BharatSense Dashboard
      </p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Analyses</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Positive</h3>
          <p>0%</p>
        </div>

        <div className="card">
          <h3>Negative</h3>
          <p>0%</p>
        </div>

        <div className="card">
          <h3>Neutral</h3>
          <p>0%</p>
        </div>
      </div>
    </section>
  )
}

export default Dashboard