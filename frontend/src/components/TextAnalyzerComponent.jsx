import { useState } from 'react'
import SentimentCard from './SentimentCard'
import LanguageCard from './LanguageCard'
import ConfidenceCard from './ConfidenceCard'
import LoadingSpinner from './LoadingSpinner'

function TextAnalyzer() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const analyzeText = () => {
    if (!text.trim()) {
      setError('Please enter some text to analyze.')
      setResult(null)
      return
    }

    setError('')
    setLoading(true)
    setResult(null)

    setTimeout(() => {
      const lowerText = text.toLowerCase()

      let sentiment = 'Neutral'
      let emotion = 'Neutral'
      let language = 'English'

      if (
        lowerText.includes('bad') ||
        lowerText.includes('kharab') ||
        lowerText.includes('bekar') ||
        lowerText.includes('hate') ||
        lowerText.includes('angry') ||
        lowerText.includes('problem') ||
        lowerText.includes('bura') ||
        lowerText.includes('खराब') ||
        lowerText.includes('बुरा')
      ) {
        sentiment = 'Negative'
        emotion = 'Anger'
      } else if (
        lowerText.includes('good') ||
        lowerText.includes('acha') ||
        lowerText.includes('achha') ||
        lowerText.includes('great') ||
        lowerText.includes('love') ||
        lowerText.includes('best') ||
        lowerText.includes('excellent') ||
        lowerText.includes('अच्छा') ||
        lowerText.includes('अच्छी') ||
        lowerText.includes('अच्छे') ||
        lowerText.includes('बेहतरीन')
      ) {
        sentiment = 'Positive'
        emotion = 'Joy'
      }

      const hindiPattern = /[\u0900-\u097F]/

      if (hindiPattern.test(text)) {
        language = 'Hindi'
      } else if (
        lowerText.includes('hai') ||
        lowerText.includes('ka') ||
        lowerText.includes('ke') ||
        lowerText.includes('ki') ||
        lowerText.includes('bahut') ||
        lowerText.includes('yaar') ||
        lowerText.includes('mera') ||
        lowerText.includes('mujhe')
      ) {
        language = 'Hinglish'
      }

      setResult({
        language,
        sentiment,
        emotion,
        confidence: '91%',
        district: 'Indore',
      })

      setLoading(false)
    }, 1000)
  }

  const clearText = () => {
    setText('')
    setResult(null)
    setError('')
    setLoading(false)
  }

  return (
    <div className="text-analyzer">
      <textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          setError('')
        }}
      />

      <div className="text-tools">
        <span>{text.length} characters</span>

        <button
          type="button"
          className="clear-btn"
          onClick={clearText}
        >
          Clear
        </button>
      </div>

      <button
        type="button"
        className="primary-btn"
        onClick={analyzeText}
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Analyze Text'}
      </button>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {loading && <LoadingSpinner />}

      {result && !loading && (
        <div className="result-card">
          <h3>Analysis Result</h3>

          <div className="result-grid">
            <LanguageCard language={result.language} />
            <SentimentCard sentiment={result.sentiment} />
            <ConfidenceCard confidence={result.confidence} />
          </div>

          <div className="result-grid">
            <div>
              <strong>Emotion</strong>
              <span>{result.emotion}</span>
            </div>

            <div>
              <strong>District</strong>
              <span>{result.district}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TextAnalyzer