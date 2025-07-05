# 📚 Minimal Library Management System (Frontend)

A clean, functional, and minimalist client-side application for managing books and borrow records. Built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript** — this system demonstrates essential library features with a focus on simplicity, responsiveness, and real-world use of RESTful API integration.

---

## 🚀 Features

### ✅ Public Access (No Auth)
- All routes are publicly accessible without authentication or login.

### 📘 Book Management
- **Book List Table**: View all books with columns – Title, Author, Genre, ISBN, Copies, Availability.
- **Add New Book**: Form to create new books.
- **Edit Book**: Modify existing book information.
- **Delete Book**: Remove books with confirmation.
- **Availability Logic**: If copies = 0, book is marked unavailable.

### 📦 Borrow Book
- Borrow form includes: **Quantity** and **Due Date**.
- Quantity must not exceed available copies.
- Book marked unavailable if all copies are borrowed.
- Redirects to Borrow Summary on success.

### 📊 Borrow Summary
- Aggregated view of borrowed books.
- Shows **Book Title**, **ISBN**, and **Total Quantity Borrowed**.

---

## 🔗 Live Routes

| Path | Description |
|------|-------------|
| `/books` | Book listing page |
| `/create-book` | Form to add new book |
| `/edit-book/:id` | Edit existing book |
| `/borrow/:bookId` | Borrow a selected book |
| `/borrow-summary` | View borrowed summary |

---

## 🛠️ Tech Stack

- **React** (Vite)
- **Redux Toolkit Query** (RTK Query)
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI** (for components)
- **RESTful API Integration**

---

## 🧠 State Management

- Implemented using Redux Toolkit + RTK Query for efficient data fetching, caching, and mutation.
- Optimistic updates for better UX during form submission.

---

## 🎨 UI/UX Highlights

- Fully **responsive**: works seamlessly on mobile, tablet, and desktop.
- **Clean, modern UI** using utility-first Tailwind classes.
- Uses **modals**, **toasts**, and **form validation** for smoother experience.





