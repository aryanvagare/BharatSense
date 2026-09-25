"""
Response schema for /predict — this MUST mirror docs/API_CONTRACT.md
exactly. If the contract changes, update this file and tell Member 2
and Member 3 the same day.
"""

from pydantic import BaseModel
from typing import Dict, List


class AspectResult(BaseModel):
    aspect: str
    sentiment: str  # "Positive" | "Negative" | "Neutral"


class PredictionResponse(BaseModel):
    language: str        # "English" | "Hindi" | "Hinglish"
    sentiment: str        # "Positive" | "Negative" | "Neutral"
    confidence: float     # 0.0–1.0
    emotion: str           # "Happy" | "Sad" | "Anger" | "Fear" | "Surprise" | "Neutral"
    district: str | None   # e.g. "Indore", or null if not detected
    emoji: Dict[str, str]  # e.g. {"😡": "Negative"}
    aspects: List[AspectResult]
