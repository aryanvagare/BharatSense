const API_BASE_URL = ''

export async function analyzeText(text) {
  const response = await fetch(`${API_BASE_URL}/api/analysis`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })

  if (!response.ok) {
    throw new Error('Analysis request failed')
  }

  return response.json()
}