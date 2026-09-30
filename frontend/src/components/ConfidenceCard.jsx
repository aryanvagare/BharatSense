function ConfidenceCard({ confidence }) {
  return (
    <div className="result-item">
      <strong>Confidence</strong>
      <span>{confidence}</span>
    </div>
  )
}

export default ConfidenceCard