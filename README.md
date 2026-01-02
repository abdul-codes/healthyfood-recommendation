# Healthy Food Recommender

Get AI-powered food recommendations based on health conditions, fitness goals, or country-specific diets.

## Live App

Frontend: https://healthyfood-recommendation.vercel.app/

Get personalized food recommendations in seconds.

## What You Can Do

### Search by Health Condition
Find foods that work for specific health issues like diabetes, hypertension, or allergies.

### Search by Health Goal
Get recommendations for fitness objectives like weight loss, muscle building, or improved energy.

### Search by Country
Discover traditional foods and cuisines from different regions and cultures.

## Key Features

- AI-Powered: Uses Google Gemini 2.5 Flash for intelligent, personalized food suggestions
- Country-Aware: Considers locally available foods when you specify your country
- Smart Caching: Faster responses and reduced API costs with 30-day cache
- Clear Guidance: Helpful descriptions and examples guide your search
- Three Search Modes: Choose what fits your needs

## How It Works

1. Select a search type (condition, goal, or country)
2. Enter your query with helpful examples shown
3. Get instant recommendations for foods to eat and avoid
4. See dietary principles for your specific situation

## Quick Start

### Try It Now

Visit https://healthyfood-recommendation.vercel.app/ to get started immediately.

### Run Locally

```bash
# Backend (Terminal 1)
cd app && pip install -r ../requirements.txt
uvicorn main:app --reload

# Frontend (Terminal 2)
cd frontend && npm install
npm run dev
```

Visit http://localhost:5173 to use the app locally.

## Tech Stack

**Backend:** FastAPI + SQLAlchemy + SQLite + Google Gemini AI

**Frontend:** React 19 + TypeScript + Vite + Tailwind CSS + Radix UI

## For Developers

**GitHub:** https://github.com/abdul-codes/healthyfood-recommendation

**API Documentation:** https://healthyfood-recommendation.onrender.com/docs
