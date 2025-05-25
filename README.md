# 🍕 PizzaApp — Next.js + Firebase Google OAuth

A modern, responsive dashboard application built with **Next.js App Router**, **Firebase Authentication (Google OAuth)**, and **Tailwind CSS**.

## 📌 Features

- ✅ Google OAuth login via Firebase
- ✅ Dashboard greeting with user’s Google name
- ✅ Pizza Orders table with mock data
- ✅ Dark mode (enabled by default)
- ✅ Responsive layout for mobile/tablet/desktop
- ✅ Clean, modern UI built with Tailwind CSS
- ✅ Logout and theme toggle support

---

## 🚀 Tech Stack

- **Next.js 15**
- **Firebase Authentication** (Google OAuth)
- **Tailwind CSS** (UI styling)
- **React Context** (for theme and auth state)
- **Next.js Middleware** (for route protection)

---

## 🛠️ Setup Instructions

### 1. 📦 Clone & Install

bash
git clone https://github.com/PriyathikGit/pizza_dashboard.git
cd pizzaapp
npm install

or

press control+p in vs code, type > Git:Clone
https://github.com/PriyathikGit/pizza_dashboard.git
cd pizzaapp
npm install

### 2. 🔐 Firebase Setup

You'll need a Firebase project to use Google Authentication.

a. Go to Firebase Console
Create a new project (or use an existing one)

Go to Build > Authentication > Sign-in Method

Enable Google sign-in

b. Add Web App to Firebase Project - https://console.firebase.google.com
- Go to Project Settings > General

- Click Add App > Web

- Register the app, then get your Firebase config:

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT_ID",
appId: "YOUR_APP_ID",
};

c. Set Environment Variables
- Create a .env.local file at the root:

- NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
- NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
- NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

### 4. 🖥️ Run the App

1. run in terminal - npm run dev
2. Visit http://localhost:3000

🌓 Dark Mode
- Enabled by default

- Toggle in Navbar

- Theme is saved in localStorage
