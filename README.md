# Food Delivery Time Prediction
 
A full-stack machine learning application that predicts food delivery time in minutes based on order context, delivery conditions, and real-time logistics inputs.
 
**Live Demo:** [anubhavsingh311.github.io/Food_Delivery_time_prediction](https://anubhavsingh311.github.io/Food_Delivery_time_prediction/)
**API Base URL:** `https://food-delivery-time-api.onrender.com`
 
---
 
## Overview
 
The model takes inputs like delivery person attributes, restaurant and delivery coordinates, weather, traffic, and order timing, then returns an estimated delivery time. The backend computes haversine distance and pickup delay from raw coordinates and timestamps before passing engineered features to the model, so the frontend only needs to collect what the user actually knows.
 
## Architecture
 
```
frontend/          → Static HTML/CSS/JS — deployed via GitHub Pages
backend/
├── main.py        → FastAPI app with /predict endpoint
├── model_utils.py → Feature engineering + prediction logic
└── model/
    ├── best_lgbm.pkl      → Trained LightGBM model
    └── preprocessor.pkl   → Fitted scikit-learn preprocessor
notebook/          → EDA, feature engineering, and model training (Kaggle)
.github/workflows/ → CI/CD pipeline for GitHub Pages deployment
```
