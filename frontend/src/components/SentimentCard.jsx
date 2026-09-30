function SentimentCard({ sentiment }) {
  return (
    <div className="result-item">
      <strong>Sentiment</strong>
      <span>{sentiment}</span>
    </div>
  )
}

export default SentimentCard