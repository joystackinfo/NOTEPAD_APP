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

 ##  User Authentication

### POST /api/users/login
Logs in a user and returns a JWT token.

**Request Body**:
```json
{
  "username": "yourUsername",
  "password": "yourPassword"
}
Responde:
{
  "message": "Login successful",
  "token": "xxx"
}

## POST /api/notes
Creates a new note for the logged-in user.

**Headers:

Content-Type: application/json

Authorization: Bearer <token>

 ** Request Body:
{
  "title": "My Note",
  "content": "This is the content of my note."
}

Response:
{
  "message": "Note created",
  "note": {
    "title": "...",
    "content": "..."
  }
}

## GET /api/notes
Retrieves all notes for the logged-in user.

Headers:
Authorization: Bearer <token>

Response:
[
  { 
    "title": "Note1", "content": "..."},

  { "title": "Note2", "content": "..." }
]


POST /api/notes/:id
Updates a note by its ID.

Headers:
Content-Type: application/json
Authorization: Bearer <token>
 Request Boby
{
  "title": "Updated Note",
  "content": "Updated content here."
}

Responde:
{
  "message": "Note updated",
  "note": {
    "title": "Updated Note",
    "content": " ...."
  }
}

 ## DELETE /api/notes/:id
  Delete a note by its ID

  Headers:
Authorization: Bearer <token>

Responde:
{
  "message": "Note deleted"
}




