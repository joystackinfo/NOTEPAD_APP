# NOTEPAD-APP

# PROJECT OVERVIEW
The app is a multi-user Notepad application.
 It allows users to create, edit, and manage their own notes under different accounts.
  The main goal is to provide a secure platform that protects user data while covering the essential note functions: create, delete, and edit.

  # FEATURES
 Users can easily interact with and access the app

User registration (username + password)

Includes basic error messages

One account per user, accessed through secure authentication

# TECH STACK
 JavaScript – main programming language

 HTML – structure of the frontend pages

CSS – styling for the frontend 

 Mongodb and Mongoose – database and data modeling

 Node.js and Express – backend framework
 
 CORS – handling cross-origin requests

dotenv – environment variable management

JWT – authentication tokens

bcrypt – password encryption


# Authentication Flow

The user fills out the registration form, which sends the data to the backend to create an account.
 During login, the form generates a JWT token, which is saved in local storage. 
 After a successful login, the Notepad app is displayed for the user.
  This ensures that each user has a secure account, and their notes are only accessible to them.


## User Authentication & Notes API
Got it, Nelson! Here's your entire API documentation written as **one continuous block** — no separate code blocks, just clean inline formatting that looks great in GitHub preview:

---

## 🔐 User Authentication & Notes API

**POST /api/users/login** – 
Logs in a user and returns a JWT token.  
Request Body: `{ "username": "yourUsername", "password": "yourPassword }` 
 
Response: `{ "message": "Login successful", "token": "xxx" }`

**POST /api/notes** – Creates a new note for the logged-in user.  

Headers: `Content-Type: application/json`, 
`Authorization: Bearer <token>`  

Request Body: `{ "title": "My Note", "content": "This is the content of my note." }` 

Response: `{ "message": "Note created", "note": { "title": "...", "content": "..." } }`

**GET /api/notes** – 
Retrieves all notes for the logged-in user.

Headers: `Authorization: Bearer <token>`

Response: `[ { "title": "Note1", "content": "..." }, { "title": "Note2", "content": "..." } ]`

**PUT /api/notes/:id** –
 Updates a note by its ID.  
Headers: `Content-Type: application/json`, 
         `Authorization: Bearer <token>`  
Request Body: `{ "title": "Updated Note", "content": "Updated content here." }`  
Response: `{ "message": "Note updated", "note": { "title": "Updated Note", "content": "Updated content here." } }`

**DELETE /api/notes/:id** –
 Deletes a note by its ID.  
Headers: `Authorization: Bearer <token>`

Response: `{ "message": "Note deleted" }`


## INSTALLATION & SETUP

1. Clone the repository
** git clone <your-repo-url> **

 2. Navigate into the project folder
  ** cd project-folder **

3.Install dependencies
** npm install **

4. Create a .env file in the root directory with your environment variables, 
 ** PORT=5000
** MONGO_URI=<your-mongo-db-connection-string>
** JWT_SECRET=<your-secret-key>

5. Start the server
 ** npm start **

 6. Open the app in your browser
Frontend files are in the public folder: index.html, login.html, register.html
  

##  Conclusion

The Notepad App demonstrates a complete, secure, and scalable full-stack application that integrates user authentication, data protection, and CRUD operations..

Thank for reading.