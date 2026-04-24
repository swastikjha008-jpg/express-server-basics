# 🔐 Auth API (Node.js)

A beginner-to-intermediate backend project built using **Node.js**, **Express**, **JWT**, and **bcrypt**.

This project demonstrates how authentication systems work in real applications — from password hashing to protected routes.

---

## 🚀 Features

* 📝 User Signup
* 🔑 Secure Login with JWT
* 🔒 Password hashing using bcrypt
* 🛡️ Protected route with middleware
* ⚡ Simple and clean API structure
* 💾 In-memory user storage (beginner-friendly)

---

## 🧠 What This Project Shows

This is not just a basic project — it proves:

* I understand **authentication flow**
* I can implement **secure login systems**
* I know how to use **JWT tokens**
* I can build **protected backend routes**

👉 This marks my transition from **beginner → intermediate backend development**

---

## 🛠 Tech Stack

* Node.js
* Express
* bcrypt
* jsonwebtoken

---

## 📂 Project Structure

```bash id="2kzv8x"
auth-api-node/
├── index.js
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Setup

### 1. Install dependencies

```bash id="6n8c5p"
npm install
```

### 2. Run server

```bash id="9j3gk2"
npm run dev
```

Server runs on:

```bash id="l8b2yw"
http://localhost:3000
```

---

## 📡 API Endpoints

### 🟢 Signup

```http id="z9yk5r"
POST /signup
```

```json id="4gq1ha"
{
  "username": "swastik",
  "password": "1234"
}
```

---

### 🔵 Login

```http id="t4a2qe"
POST /login
```

```json id="j8v0o2"
{
  "username": "swastik",
  "password": "1234"
}
```

👉 Returns JWT token

---

### 🔐 Protected Route

```http id="8q9h3p"
GET /me
```

Headers:

```bash id="n4g7lm"
Authorization: <your_token>
```

---

## 🔄 Flow of Authentication

1. User signs up → password gets hashed
2. User logs in → JWT token is generated
3. Token is used to access protected routes

---

## 🧪 Testing (Postman)

* Use **POST /signup** → create user
* Use **POST /login** → get token
* Use token in header → access **/me**

---

## 📈 My Progress

* ✅ Built multiple frontend projects
* ✅ Learned JavaScript fundamentals
* ✅ Built a Todo App with logic
* 🔥 Built my first **Auth API (this project)**

👉 This project marks my entry into **backend development**

---

## ⚠️ Notes

* This project uses **in-memory storage**
* Data resets when server restarts
* Designed for learning purposes

---

## 🚀 Future Improvements

* Connect to MongoDB
* Add refresh tokens
* Implement role-based auth
* Add validation (Zod / Joi)
* Add frontend integration

---

## 👨‍💻 Author

**Swastik**
GitHub: https://github.com/swastikjha008-jpg

---

## ⭐ Final Thoughts

This project helped me understand how real authentication systems work.
More backend projects coming next 🚀
