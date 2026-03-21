📱 BytesAttend — Mobile App Overview
BytesAttend is an advanced attendance management system designed for educational institutions. It combines QR code scanning with AI-powered face verification to deliver accurate and fraud-proof attendance tracking.
The platform supports multiple institutions under a single system and provides role-based access for Students and Teachers.
________________________________________
⚙️ Tech Stack
📲 Frontend
•	Flutter (Cross-platform: Android & iOS)
☁️ Backend & Services
•	Firebase:
o	Authentication
o	Firestore Database
o	Cloud Storage
o	Cloud Messaging (FCM)
o	Remote Config
🤖 AI & Verification
•	Custom AI API:
o	Liveness Detection
o	Anti-Spoofing
•	Google ML Kit (On-device face detection)
📍 Additional Features
•	GPS-based geolocation tracking
•	SharedPreferences + device file storage
•	Push Notifications + Text-to-Speech (TTS)
________________________________________
🚀 App Launch Flow
When the app starts, it follows a structured initialization process:
1.	Firebase initialization
2.	Maintenance mode check
o	If active → Maintenance screen displayed
3.	App version validation
o	If outdated → Update prompt shown
4.	Session check
o	Logged-in user → Redirect to dashboard
o	Not logged in → Show login screen
________________________________________
🔐 Authentication
Login
•	Email + Password + University selection
•	Firebase Authentication handles login
•	User profile fetched from Firestore
•	University code stored locally for session persistence
Security Checks
•	University expiry validation
•	Account activation status check
•	Camera permission request (for face verification)
Password Reset
•	Reset link sent via email
Logout
•	Clears session and returns to login screen
________________________________________
🎓 Student Module
📊 Dashboard (Profile)
•	Name, Enrollment Number
•	Course, Semester, Division
•	Profile Photo
•	Navigation to features
________________________________________
✅ Mark Attendance Flow
1.	Open Scanner screen
2.	Scan teacher-generated QR code
3.	Capture 2 face images (500ms gap)
4.	Perform:
o	Liveness Detection
o	Anti-Spoofing
o	Face Matching
5.	If verified:
o	Attendance stored in Firestore
o	GPS + timestamp recorded
6.	Success shown via:
o	Overlay animation
o	TTS confirmation
________________________________________
📈 Attendance Summary
•	Subject-wise percentage
•	Overall semester percentage
•	Today’s attendance stats
•	Elective tracking
________________________________________
📜 Attendance History
•	Session-wise attendance list
•	Filter by session ID / enrollment
________________________________________
📊 Reports
•	Subject Report
•	Monthly Report
•	Semester Report (with charts)
________________________________________
🧾 Created Sessions
•	View sessions created (if applicable)
________________________________________
📂 Projects
•	Upload & manage submissions
•	Firebase Storage integration
•	Open project links via URL launcher
________________________________________
👨‍🏫 Teacher Module
🏠 Dashboard
•	Teacher name, course, college
•	Feature navigation
•	Face verification required on login
________________________________________
📡 Create Attendance Session
1.	Select semester & division
2.	Fetch GPS location
3.	Generate unique QR code
4.	Display QR for students
5.	Monitor attendance in real-time
________________________________________
📋 Attendance Management
•	Attendance List (with timestamps)
•	Attendance Summary (class-level stats)
________________________________________
👥 Student Management
•	View all students
•	View individual profiles
________________________________________
⚙️ Teacher Profile
•	Update personal details
•	Manage account settings
________________________________________
🤖 Face Verification System
🔍 Process Flow
1.	Camera activates during attendance or app resume
2.	Face detected using ML Kit
3.	Capture 2 frames (500ms gap)
4.	Send images to AI API
5.	API performs:
o	Liveness Detection
o	Anti-Spoofing
o	Face Similarity Matching
6.	Returns similarity score
7.	If failed → Attendance rejected
________________________________________
🔁 Re-Verification Policy
•	Required if app inactive > 10 minutes
•	Applies to both students and teachers
________________________________________
🔔 Notification System
•	Firebase Push Notifications
•	Local Notifications
•	Text-to-Speech confirmations
•	Animated success overlays
________________________________________
🏫 Multi-University Support
•	Unique university code per institution
•	Firestore data scoped per university
•	Admin controls:
o	Activate/Deactivate institutions
o	Expiry enforcement
•	Remote Config enables:
o	Feature flags
o	API endpoint control
________________________________________
🛠️ System & Admin Features
🧰 Maintenance Mode
•	Controlled via Firestore
•	Real-time activation/deactivation
________________________________________
🔄 App Updates
•	Checked via Remote Config
•	Supports:
o	Forced updates
o	Optional updates
________________________________________
🚫 Account Monitoring
•	Real-time account status tracking
•	Auto logout if deactivated
________________________________________
🗂️ Data Structure (High-Level)
Entity	Key Fields
Student/Teacher	Name, Email, Enrollment, Course, Semester, Division, College, University Code, Photo, Role, Status
Session	Session ID, QR Data, Teacher Info, Date, Semester, Division, Location
Attendance	Enrollment, Session ID, Timestamp, GPS, Face Verification Status
University	Code, Name, Expiry Status, Config
Project	Title, Description, File URL, Student Info, Submission Date
________________________________________
👥 User Roles
Role	Access
Student	Mark attendance, view reports, manage profile, submit projects
Teacher	Create sessions, manage attendance, view summaries, manage students
HOD	All teacher permissions + oversight capabilities

