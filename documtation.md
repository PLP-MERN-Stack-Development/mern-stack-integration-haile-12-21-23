# MERN Blog Application

A full-stack blog application built with  **MongoDB, Express.js, React.js (Vite), and Node.js** . The application allows users to  **register, log in, create/edit/delete blog posts, view categories, and see their profile** . It also supports authentication with JWT.

---

## Features

* User registration and login
* JWT-based authentication
* Protected routes for creating/editing posts
* Create, read, update, delete (CRUD) posts
* View all posts and single post details
* View categories
* Responsive UI with Tailwind CSS
* API service layer for backend communication

---

## Tech Stack

* **Frontend:** React.js, Vite, Tailwind CSS, React Router, Axios, React Hook Form
* **Backend:** Node.js, Express.js, MongoDB, Mongoose
* **Authentication:** JWT (JSON Web Tokens)
* **State Management:** React Context + Hooks

---

## ⚡ Folder Structure

<pre class="overflow-visible!" data-start="1103" data-end="1608"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>client/
 └─ src/
     ├─ assets/
     ├─ components/          </span><span># Navbar, ProtectedRoute, etc.</span><span>
     ├─ context/             </span><span># AuthContext.jsx</span><span>
     ├─ hooks/               </span><span># useFetch.js, useAuth.js</span><span>
     ├─ pages/               </span><span># HomePage, PostPage, PostForm, Login, Register</span><span>
     ├─ services/            </span><span># api.js, authService.js, postsService.js, categoriesService.js</span><span>
     ├─ App.jsx
     ├─ main.jsx
     └─ index.css
server/
 └─ ...                     </span><span># Express server, routes, models, controllers</span><span>
</span></span></code></div></div></pre>

---

## 🚀 Setup Instructions

### 1. Prerequisites

* Node.js v18+
* MongoDB installed and running
* Git installed

---

### 2. Clone Repository

 git clone https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-haile-12-21-23/tree/main

cd merb-

---

### 3. Backend Setup

<pre class="overflow-visible!" data-start="1843" data-end="1876"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> server
npm install
</span></span></code></div></div></pre>

Create a `.env` file with:

<pre class="overflow-visible!" data-start="1906" data-end="1996"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>PORT</span><span>=</span><span>5000</span><span>
</span><span>MONGO_URI</span><span>=mongodb://localhost:</span><span>27017</span><span>/mern-blog
</span><span>JWT_SECRET</span><span>=your_jwt_secret
</span></span></code></div></div></pre>

Start backend server:

<pre class="overflow-visible!" data-start="2021" data-end="2044"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run dev
</span></span></code></div></div></pre>

---

### 4. Frontend Setup

<pre class="overflow-visible!" data-start="2074" data-end="2107"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> client
npm install
</span></span></code></div></div></pre>

Create a `.env` file:

<pre class="overflow-visible!" data-start="2132" data-end="2183"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>VITE_API_BASE_URL=http://localhost:5000/api
</span></span></code></div></div></pre>

Start frontend server:

<pre class="overflow-visible!" data-start="2209" data-end="2232"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run dev
</span></span></code></div></div></pre>

Frontend should now be available at `http://localhost:5173` (or the port Vite shows).

---

## 🔗 API Documentation

### Auth Routes

| Method | Endpoint           | Description       | Body                                     | Response                        |
| ------ | ------------------ | ----------------- | ---------------------------------------- | ------------------------------- |
| POST   | /api/auth/register | Register new user | `{ "name", "email", "password" }`      | `{ message: 'User created' }` |
| POST   | /api/auth/login    | Login user        | `{ "email", "password" }`              | `{ token: JWT }`              |
| GET    | /api/auth/profile  | Get current user  | Header:`Authorization: Bearer <token>` | `{ _id, name, email }`        |

### Post Routes

| Method | Endpoint       | Description     | Body                                | Response                   |
| ------ | -------------- | --------------- | ----------------------------------- | -------------------------- |
| GET    | /api/posts     | Get all posts   | None                                | Array of posts             |
| GET    | /api/posts/:id | Get single post | None                                | Post object                |
| POST   | /api/posts     | Create post     | `{ title, content, category }`    | Created post object        |
| PUT    | /api/posts/:id | Update post     | `{ title?, content?, category? }` | Updated post object        |
| DELETE | /api/posts/:id | Delete post     | None                                | `{ message: 'Deleted' }` |

### Category Routes

| Method | Endpoint        | Description        | Body         | Response                |
| ------ | --------------- | ------------------ | ------------ | ----------------------- |
| GET    | /api/categories | Get all categories | None         | Array of categories     |
| POST   | /api/categories | Create category    | `{ name }` | Created category object |

---

## 🧑‍💻 Authentication Flow

1. User registers → receives success message
2. User logs in → receives JWT token
3. Token stored in `localStorage` and attached to Axios requests
4. User profile fetched using `/auth/profile`
5. Protected routes prevent access if not logged in

---

## 🖼️ Screenshots

![1762032266021](image/documtation/1762032266021.png)

---

## ✅ Submission Notes
