This project is a secure authentication system built using the MERN Stack
(MongoDB, Express.js, React.js, Node.js).
It provides user registration and login functionality with Email Verification and Phone Number Verification
(OTP-based) to ensure secure and validated user accounts.

🚀 Features
✅ User Registration 
✅ User Login 
✅ Email Verification (OTP / Verification Code) 
✅ Phone Number Verification (OTP via SMS) 
✅ Password Hashing with Bcrypt 
✅ JWT Token Authentication 
✅ Protected Routes 
✅ Error Handling Middleware 
✅ Form Validation (Frontend + Backend)

📁 Frontend Structure 
client/ 
│── src/ │
│── pages/ │
│── components/ │
│── services/ │
│── App.jsx

📂 Project Structure 
(Backend) server/
│── controllers/ 
│── models/
│── routes/
│── middlewares/
│── utils/
│── config/
│── server.js

🛠️ Tech Stack Frontend:

React.js 
React Router DOM 
Tailwind CSS / CSS

Backend:

Node.js 
Express.js 
MongoDB (Mongoose) 
JWT (JSON Web Token) 
Bcrypt.js 
Nodemailer (for Email Verification) 
Twilio (for Phone OTP Verification)

🔄 Authentication Flow 
📝 1. User Registration Process

User fills out the registration form:
Name Email Phone Number Password

Backend validates:

Required fields
Email format Phone number format Password strength Duplicate email/phone check
Password is securely hashed using bcrypt.
A verification code (OTP) is generated: 
📧 Sent to user's email using Nodemailer 📱 Sent to user's phone number using Twilio SMS API
User enters received OTP(s).

If OTP is valid:

Account is marked as verified. JWT token is generated. User is logged in successfully.

🔑 2. User Login Process

User enters:Email (or Phone) Password

Backend:

Checks if user exists Compares password using bcrypt Verifies that email & phone are verified

If valid: JWT token is generated Token is sent in HTTP-only cookie (or response) User gets access to protected routes

🔐 Security Implementation

Passwords are hashed using bcrypt before storing in database. JWT is used for authentication. Protected routes middleware verifies token before granting access. OTP verification prevents fake registrations. Environment variables are used for: MongoDB URI JWT Secret Email credentials Twilio SID & Auth Token

🌐 Environment Variables (.env) PORT= MONGO_URI= JWT_SECRET= EMAIL_USER= EMAIL_PASS= TWILIO_SID= TWILIO_AUTH_TOKEN=

📌 Future Improvements

Forgot Password (Reset via Email) Refresh Token System Google OAuth Login Rate Limiting Account Lock After Multiple Failed Attempts

🔹 Register User

POST /api/v1/register

Request Body: { "name": "Dipak", "email": "dipak@gmail.com", "phone": "98XXXXXXXX", "password": "StrongPassword123" }

Response: { "success": true, "message": "Verification code sent to email and phone" } 🔹 Verify OTP

POST /api/v1/verify

{ "email": "dipak@gmail.com", "verificationCode": "123456" } 🔹 Login User

POST /api/v1/login

{ "email": "dipak@gmail.com", "password": "StrongPassword123" }

🔄 Authentication Flow (Step-by-Step) User → Register Form → Backend Validation → Hash Password (bcrypt) → Generate OTP → Send Email (Nodemailer) → Send SMS (Twilio) → User Enters OTP → Verify OTP → Mark User Verified → Generate JWT → Login Successful

🔮 Future Improvements

Forgot Password (Email Reset Link) Refresh Token System Role-Based Authorization (Admin/User) Google OAuth Login Account Lock After Multiple Failed Attempts Rate Limiting with Redis

🧠 Learning Outcome

This project demonstrates: Full-stack authentication flow OTP verification system Secure password handling Token-based authorization Middleware architecture Production-ready backend structure
