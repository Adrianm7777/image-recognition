Image Recognition System
An image recognition application using a React/Next.js frontend and Django REST backend, with a TensorFlow/Keras model for image classification.

Features:

Image Upload: Upload images via the frontend.
Classification: Classify images into categories using a pre-trained model.
Real-time Results: Instant recognition results displayed after upload.

Tech Stack:

Frontend: Next.js, TypeScript, Tailwind CSS
Backend: Django, Django REST Framework, TensorFlow
Database: PostgreSQL/MySQL/SQLite

Setup:

Prerequisites
Node.js and Yarn
Python 3.10+ with TensorFlow

Installation
Clone the repository:

Skopiuj kod
git clone https://github.com/yourusername/image-recognition-system.git

Backend:


Skopiuj kod
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Frontend:

Skopiuj kod
cd frontend
yarn install
yarn dev
Usage
Access http://localhost:3000/ in your browser.
Upload an image to classify it.
API
POST /api/classify/: Uploads an image and returns classification results.
