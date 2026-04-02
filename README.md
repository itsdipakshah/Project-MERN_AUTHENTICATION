# 🔐 MERN Stack Authentication System

A secure, production-ready authentication system built using the **MERN Stack** (MongoDB, Express, React, Node.js). This project serves as a robust foundation for user management, featuring JWT-based security and HTTP-only cookie sessions.

---

## 🎯 Project Overview
This project was developed to master the intricate details of modern web security. It focuses on solving real-world development challenges such as middleware sequencing, secure token handling, and centralized error management.



---

## 🚀 Key Features

* **User Registration:** Secure signup with password hashing using `bcryptjs`.
* **JWT Authentication:** Stateless authentication using JSON Web Tokens.
* **Secure Cookie Storage:** Storing tokens in `httpOnly` cookies to protect against XSS attacks.
* **Persistent Login:** Seamless session management using `cookie-parser`.
* **Secure Logout:** Complete server-side cookie clearing and client-side session termination.
* **Global Error Handling:** Custom `ErrorHandler` middleware for consistent API responses.



---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Axios (Configured with Credentials) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Security** | JWT, Bcrypt.js, Cookie-Parser |

---

## 📂 Project Structure

```text
├── backend/
│   ├── database/        # Connection logic (MongoDB Atlas)
│   ├── controllers/     # Auth logic (Register, Login, Logout)
│   ├── middleware/      # Auth protection & Global Error Handler
│   ├── models/          # User Schema (Mongoose)
│   ├── routers/         # Express API routes
│   └── app.js           # The Middleware Pipeline (CORS, Parsers, Routes)
└── frontend/            # React Client Application


```

## 🛠️ Tech Stack Frontend:

 * React.js 
*  React Router DOM 
* Tailwind CSS / CSS

**Backend:**

* Node.js 
* Express.js 
* MongoDB (Mongoose) 
* JWT (JSON Web Token) 
* Bcrypt.js 
* Nodemailer (for Email Verification) 
* Twilio (for Phone OTP Verification)

## 🔄 Authentication Flow 
**📝 1. User Registration Process**

* User fills out the registration form:

* Name
* Email
* Phone
* Number
* Password

**.env**
  ```text
  PORT=4000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_secret_key
  COOKIE_EXPIRE=5
  FRONTEND_URI=http://localhost:3000
  ```


**Backend validates:**

* Required fields
* Email format Phone number format Password strength Duplicate email/phone check
* Password is securely hashed using bcrypt.
* A verification code (OTP) is generated: 
* 📧 Sent to user's email using Nodemailer
* 📱 Sent to user's phone number using Twilio SMS API
* User enters received OTP(s).

**If OTP is valid:**

Account is marked as verified. JWT token is generated. User is logged in successfully.

## 🔑 2. User Login Process

**User enters:** 
* Email (or Phone)
* Password

**Backend:**

Checks if user exists Compares password using bcrypt Verifies that email & phone are verified

If valid: JWT token is generated Token is sent in HTTP-only cookie (or response) User gets access to protected routes

## 🔐 Security Implementation

* Passwords are hashed using bcrypt before storing in database.
* JWT is used for authentication. Protected routes middleware verifies token before granting access.
* OTP verification prevents fake registrations.
* Environment variables are used for:
* MongoDB URI JWT Secret Email credentials Twilio SID & Auth Token


## 📌 Future Improvements

* Forgot Password (Reset via Email)
* Refresh Token System Google OAuth Login Rate Limiting Account Lock After Multiple Failed Attempts


### 🔮 Future Improvements

* Forgot Password (Email Reset Link) 
* Refresh Token System Role-Based Authorization (Admin/User)
* Google OAuth Login Account Lock After Multiple Failed Attempts Rate Limiting with Redis

### 🧠 Learning Outcome

**This project demonstrates:** Full-stack authentication flow OTP verification system Secure password handling Token-based authorization Middleware architecture Production-ready backend structure
