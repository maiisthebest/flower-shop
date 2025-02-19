# Flower Shop 🌸

Flower Shop is a simple web application for browsing a selection of flowers. It consists of a **React + TypeScript frontend** and a **Ruby on Rails API backend**. The app is deployed using **AWS Elastic Beanstalk** for the backend and **AWS S3** for the frontend.

## 🌟 Features

- **Frontend**: Built with React, TypeScript, and Vite.
- **Backend**: Ruby on Rails API serving flower data.
- **Infrastructure**:
  - Backend hosted on **AWS Elastic Beanstalk**.
  - Frontend hosted on **AWS S3**.
- **Testing**: Both frontend and backend include test suites.

## 🏗 Project Structure

```
flower-shop/
│── flower-shop-frontend/      # React frontend (Vite + TypeScript)
│   ├── src/
│   ├── public/
│   ├── infra/                 # Terraform for frontend infra (S3, IAM)
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
│── flower-shop-api/           # Rails backend (API-only mode)
│   ├── app/
│   ├── config/
│   ├── db/
│   ├── infra/                 # Terraform for backend infra (Elastic Beanstalk, IAM)
│   ├── Gemfile
│   ├── Rakefile
│   ├── config.ru
│   └── routes.rb
│
│── .github/                    # CI/CD workflows
│   ├── workflows/
│   │   ├── deploy-frontend.yml
│   │   ├── deploy-backend.yml
│
│── README.md
│── .gitignore
```

## 🚀 Getting started

### 1️⃣ Clone the repository

```sh
git clone https://github.com/maiisthebest/flower-shop
cd flower-shop
```

### 2️⃣ Setup the backend

```sh
cd flower-shop-api
bundle install
rails s
```

### 3️⃣ Setup the frontend

```sh
cd flower-shop-frontend
npm install
npm run dev

```

The frontend will be available at http://localhost:5173.
The backend will be available at http://localhost:3000.
Follow the README of the corresponding service for more details.
