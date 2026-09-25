"""
BharatSense ML Service — FastAPI entry point.

Week 1 goal: a running server with /health and a STUB /predict endpoint
so Backend (Member 2) and Frontend (Member 3) can build against a real,
frozen response shape from day one. Real models get swapped in week by
week behind this same endpoint — the response shape should not change.
"""

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="BharatSense", version="0.1.0")


class AnalyzeRequest(BaseModel):
    text: str


@app.get("/health")
def health():
    return {"status": "ok", "service": "ml-service"}


@app.post("/predict")
def predict(request: AnalyzeRequest):
    """
    STUB implementation — returns hardcoded fake data matching the
    agreed API contract (see docs/API_CONTRACT.md). Replace the body
    of this function week by week with real model calls, without
    changing the response keys/types.
    """
    return {
        "language": "Hinglish",
        "sentiment": "Negative",
        "confidence": 0.91,
        "emotion": "Anger",
        "district": "Indore",
        "emoji": {"😡": "Negative"},
        "aspects": [
            {"aspect": "Traffic", "sentiment": "Negative"}
        ],
    }


# Run locally with: uvicorn app.main:app --reload
