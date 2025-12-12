# Real Estate Task – Frontend Assignment (ICOM)

This project is built as a submission for the **ICOM Frontend Developer Task**.  
It includes all required features mentioned in the assignment, in addition to **extra bonus features** to enhance the overall user experience.

---

## 🚀 Tech Stack

- **Next.js 15.4.8**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**
- **React Hook Form**
- **Zod**
- **React Query**
- **Framer Motion**
- **LocalStorage Authentication**
- **Responsive Design**

---

## ✅ Completed Tasks

### **1️⃣ Register Page**

- Email, Password, Confirm Password fields
- Validation using **React Hook Form + Zod**
- Show/Hide password icon
- Error messages under inputs
- Disabled button + loading spinner
- Submission request to:  
  `https://dummyjson.com/users/add`
- Success and error toast notifications

---

### **2️⃣ Users Page (List + Search)**

- Fetch data from:  
  `https://jsonplaceholder.typicode.com/users`
- Search with live filter
- User cards display:
  - Name
  - Email
  - Company
- Loading + Error states
- Smooth scroll and mobile-friendly layout

**🔍 Bonus Feature:**  
✔ Added filter selector to search by **Name**, **Email**, or **Company**

---

### **3️⃣ Home Page (Figma UI Recreation)**

- Pixel-perfect implementation based on the provided Figma file
- Fully responsive
- Styled using Tailwind + Shadcn UI components
- Added smooth animation with Framer Motion
- Horizontal scroll cards with hidden scrollbar on mobile (touch scroll)

---

## 🎁 Bonus Features Added

These features were **not required** in the task but were added to improve the project:

### ⭐ **1. Dark Mode (Full Theme Support)**

- Implemented using `next-themes`
- Smooth toggle animation
- Works across all pages
- SVG icons automatically adapt to theme (light/dark)

### ⭐ **2. Login Page (Not Required but Implemented)**

- Email + Password fields
- Form validation
- LocalStorage login system
- Redirects based on authentication
- Integrated with `AuthGuard` to protect private pages
- Helps the reviewers navigate as if it were a real app

### ⭐ **3. Advanced User Search Filters**

- Users can filter by:
  - **Name**
  - **Email**
  - **Company**
- Makes the UI more practical and easier to test

---

## 🔐 Authentication (Bonus)

A simple LocalStorage-based authentication system:

- User is redirected to Login if they are not authenticated
- Registered/logged users can access pages freely
- Logout clears localStorage

---

## 📁 Project Structure
src/
├── app/              # Next.js App Router pages 
├── components/       # Reusable UI components
│   ├── common/       # Shared building blocks (inputs, icons, headings, etc.)
│   ├── auth/         # Login / Register / AuthGuard
│   ├── layout/       # Navbar, theme menu...
│   └── home/         # Home-specific UI elements
├── hooks/            # Custom hooks
├── lib/
│   ├── api/          # API logic (fetchers, mutations...)
│   ├── validations/  # Zod schemas
│   └── utils.ts      # Helper functions

---

## 🏢 Project Purpose

This project is **exclusively developed for ICOM**  
as part of the company’s **Frontend Developer hiring process**.

---

## ▶️ Running the Project

```bash
npm install
npm run dev
```

Project will be available at:
http://localhost:3000

## 👤 Developed By

Kareem Nasrallah
Frontend Developer
