🌐 BytesAttend — Web App Overview
BytesAttend is a cloud-based attendance management platform built for educational institutions. It is developed as a Flutter Web application powered by Firebase, offering a scalable and role-based system for managing attendance across multiple universities.
This document provides a complete overview of the system for marketing, documentation, and technical reference purposes.
________________________________________
🎯 What the App Does
BytesAttend digitizes and automates attendance tracking by replacing traditional manual registers with a secure, role-based digital system.
Key Capabilities:
•	Teachers mark attendance per session
•	Students view their attendance records (via mobile app)
•	Administrators monitor and manage institution-wide data
________________________________________
👥 User Roles
The system supports four distinct roles:
Role	Description
Super Admin	Platform-level control — manages universities, subscriptions, and global settings
University Admin (HOD)	Manages courses, users, subjects, and reports within a university
Teacher	Creates sessions, marks attendance, and manages assigned students
Student	Views attendance summaries and reports (via mobile app)
________________________________________
🧱 Application Structure
📱 Core Screens / Pages
🔐 Authentication
•	Splash Screen — checks maintenance status and login session
•	Login Screen — requires email, password, and university code
•	Change Password Screen — allows password updates
________________________________________
🏠 Dashboard (Home)
•	Role-based UI with quick actions
•	Displays active sessions for the day
•	Filters: college, course, semester, division
•	Shows subscription status alerts
________________________________________
🎓 Student Management
•	Add Student (single or bulk via Excel)
•	Show All Students (search + filters)
•	Change Semester (bulk promotion)
•	Student Profile (view/edit details)
________________________________________
👨‍🏫 Teacher Management
•	Add Teacher / HOD (single or bulk)
•	Show All Teachers (search + filters)
•	Teacher Profile (view/update details)
________________________________________
🏫 College Management (Super Admin only)
•	Add College under a university
•	View, search, and delete colleges
________________________________________
📚 Subject Management
•	Add/manage subjects per course & semester
•	Support for elective subjects
•	Assign teachers to subjects
•	Bulk upload via Excel
________________________________________
🗓️ Timetable
•	Configure weekly timetable
•	Map time slots to lecture numbers
•	Used for automated session generation
________________________________________
📡 Session Management
•	Manual session creation with QR code
•	Automatic session generation via Cloud Functions
•	Unique deterministic session IDs prevent duplication
________________________________________
📋 Attendance
•	Attendance List (view/edit per session/date)
•	Teacher Attendance Screen
•	Attendance stored per student per session
________________________________________
📊 Reports
•	Attendance Summary
•	Subject Report (with charts)
•	Semester Report
•	Monthly Report
•	Export to PDF / Excel
________________________________________
⚙️ Account & Settings
•	University Account (subscription details, user counts)
•	Update Profile (name, photo)
•	Maintenance Screen (global downtime view)
________________________________________
🔄 Core Workflows
🏫 1. University Onboarding
1.	Super Admin creates university with unique code
2.	Sets subscription plan, duration, and limits
3.	University Admin logs in using credentials
________________________________________
🧩 2. Course Setup
1.	Add colleges under university
2.	Configure courses, semesters, specializations
3.	Add subjects (regular + elective)
4.	Define weekly timetable
________________________________________
👥 3. User Management
•	Add users individually via forms
•	Bulk upload via Excel template
•	Backend creates:
o	Firebase Auth accounts
o	Firestore records in batch
________________________________________
⏰ 4. Automated Session Generation
•	Firebase Cloud Function runs daily at midnight (IST)
•	Reads timetable and generates sessions
•	Covers:
o	Course
o	Semester
o	Division
o	Subject
•	Prevents duplicates using deterministic IDs
________________________________________
✅ 5. Attendance Marking
•	Teacher opens session
•	QR code generated for students
•	Students scan via mobile app
•	Manual marking also supported
•	Data saved in Firestore per student per session
________________________________________
📊 6. Report Generation
•	Students view personal attendance
•	Admin/HOD can view all students
•	Displays:
o	Total sessions
o	Attended sessions
o	Percentage
•	Electives filtered per student
•	Export supported (PDF / Excel)
________________________________________
🔁 7. Semester Promotion
•	Admin selects course & semester
•	Bulk promotes students
•	Final semester handled separately
________________________________________
⚙️ Technology Stack
Layer	Technology
Frontend	Flutter (Web)
Backend / Database	Firebase Firestore
Authentication	Firebase Authentication
Scheduled Jobs	Firebase Cloud Functions (Node.js)
Remote Config	Firebase Remote Config
File Export	Excel (.xlsx), PDF
Hosting	Firebase Hosting
________________________________________


💳 Subscription Model
Each university operates under a subscription plan:
Includes:
•	Deployment Type: Testing / Production
•	Duration: 15 days / 30 days / 1–3 years
•	User Limit: Max registered users
Behavior:
•	Checked during login
•	Warning shown before expiry
________________________________________
🛠️ Maintenance Mode
•	Controlled via Firestore
•	Applies globally to all users
•	Real-time activation (no redeploy required)
________________________________________
✨ Key Features Summary
•	Multi-tenant architecture (multiple universities, isolated data)
•	Role-based access control (Super Admin, HOD, Teacher, Student)
•	Automated session generation from timetables
•	QR-based attendance system
•	Elective subject enrollment tracking
•	Bulk user import via Excel
•	Export reports (PDF & Excel)
•	Real-time maintenance mode
•	Subscription and expiry management
•	Optimized performance with profile photo caching

