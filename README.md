🏥 Doctor Appointment Booking System

A full-stack Doctor Appointment Booking System built using MERN stack, featuring role-based access for Users, Doctors, and Admin, with a secure Demo Admin Mode for public showcasing.

This project demonstrates real-world backend architecture, authentication, and role separation while remaining safe for public deployment.

🚀 Features

👤 User

-User registration and login
-Browse doctors by specialty
-Book appointments
-View appointment history
-Secure authentication using JWT

👨‍⚕️ Doctor

-Secure doctor login
-View assigned appointments
-Mark appointments as completed
-View dashboard statistics
-Update profile and availability

🛠️ Admin

-Admin authentication
-View all doctors, users, and appointments
-Add new doctors
-Cancel appointments
-Toggle doctor availability
-Admin dashboard with analytics

🔐 Demo Admin Mode (Public Safe)

To safely showcase admin functionality in a public deployment, this project includes a Demo Admin Mode.

✅ When Demo Mode is enabled:

Only demo admin credentials can log in
Sensitive actions (e.g. changing doctor availability) are restricted
Prevents exposure of real admin credentials

🔁 When Demo Mode is disabled:

Real admin credentials work
Full admin functionality is available

🔑 Demo Admin Credentials
Email: demo_admin@example.com
Password: DemoAdmin@123
⚠️ Note: Some admin actions are intentionally disabled in demo mode.

Doctor side functionalities-
<img width="1919" height="664" alt="image" src="https://github.com/user-attachments/assets/25766cf5-fa14-4270-b641-24609a2c5801" />
<img width="1918" height="480" alt="image" src="https://github.com/user-attachments/assets/c37d64a0-7784-4747-bfd8-10d4a0a5e8f9" />
<img width="1169" height="680" alt="image" src="https://github.com/user-attachments/assets/494f4a34-abab-4423-968b-a5203fe31eab" />


🧪 Test Doctor & User Accounts

-Doctors are created by the admin
-Doctor login uses secure hashed passwords
-Users can register normally via the signup flow

🧠 Tech Stack
Frontend-
React.js
Axios
Tailwind CSS
React Router

Backend-
Node.js
Express.js
MongoDB & Mongoose
JWT Authentication
bcrypt
Cloudinary (image uploads)
