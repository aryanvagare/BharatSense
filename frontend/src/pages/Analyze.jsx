import TextAnalyzer from '../components/TextAnalyzerComponent'

function Analyze() {
  return (
    <section className="analyze-section">
      <h2>Analyze Your Text</h2>

      <p>
        Enter an Indian social media comment or sentence below.
      </p>

      <TextAnalyzer />
    </section>
  )
}

export default Analyze