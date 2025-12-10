# 📝 Notepad App

A secure, multi-user note-taking application built with Node.js and Express. Users can register, log in, and manage their personal notes with full CRUD functionality.

---

## 📌 Project Overview ✨

The Notepad App is a **multi-user note‑taking application** that allows users to securely create, view, and delete  personal notes within individual accounts. Each user has a protected space, ensuring privacy and safe data handling.

---

## 🚀 Installation & Setup 🛠️

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd project-folder
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup MongoDB Atlas
- Create an account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
- Create a cluster and connect your app
- Copy the connection string

### 4. Create a `.env` file
```env
```Example 
PORT=3000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

### 5. Start the server
```bash
npm run dev
```

Server runs on: [http://localhost:3000](http://localhost:3000)

### 6. Open the frontend
Open the `public` folder and launch:
- `index.html`
- `login.html`
- `register.html`


## 🔐 Key Endpoints

### Auth
- `POST /api/users/register` – Register a new user
- `POST /api/users/login` – Login and receive token

### Notes
- `GET /api/notes` – Get all notes
- `POST /api/notes` – Create a note
- `PUT /api/notes/:id` – Update a note (backend only)
- `DELETE /api/notes/:id` – Delete a note

---
### 7. API Testing with Postman
All API endpoints can be tested using the [Postman Collection](https://joynelsoninfo-8152801.postman.co/workspace/joynelsoninfo's-Workspace~67ef7bf9-538e-43fc-8697-f06bbf5357fa/collection/47682593-7174c3c4-7193-4742-a9c2-68190d0bb510?action=share&creator=47682593) 🔗.


## 💡 Usage 🖊️

1. If you do not have an account, go to the **register page** and create an account.
2. Open the **login page** and enter your username and password to log in.
3. After login, you will see the **Notepad dashboard** with a list of your notes.
4. To **create a new note**, click the “Add Note” button and fill in the title and content.
5. To **delete a note**, click the “Delete” button next to the note.

All notes are **user-specific**, meaning only your notes are visible to you.

---

## ✨ Features 🚀

- 👤 User registration (username + password)
- 🔐 Secure login with JWT authentication
- 📝 Create and delete personal notes
- 🔒 User-specific access — each user sees **only their own notes**

---

## 💻 Tech Stack

**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, dotenv, and CORS  

**Frontend:** HTML, CSS, JavaScript  

**Node Modules:** mongoose, bcrypt, express.js  

**Tools:** Nodemon, Postman

---

## 📬 Contact

For questions or feedback, reach out  via email at [joynelsoninfo@gmail.com]

## 🎉 Conclusion 🏁

The Notepad App showcases a secure, full‑stack application with authentication and user protection. It's a great foundation for larger projects and real-world applications.
