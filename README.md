# MERN E-Commerce Platform
Beginner starter: React + Vite frontend, Express/Node API, MongoDB/Mongoose product catalog, search, and browser shopping cart.

## Run backend
1. Install Node.js and MongoDB (or use MongoDB Atlas).
2. In PowerShell: `cd server`
3. `npm install`
4. Copy `.env.example` to `.env` and set `MONGODB_URI`.
5. `npm run dev`

## Run frontend (second terminal)
1. `cd client`
2. `npm install`
3. `npm run dev`
4. Open the Vite URL, usually http://localhost:5173.

API routes: GET `/api/health`, GET `/api/products?search=...`, POST `/api/products`.
POST is for learning only and is not protected. Authentication, orders, and payments are not implemented. Do not deploy without adding authorization and validation.

# MERN E-Commerce Platform

A full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The platform allows users to browse products, manage shopping carts, place orders, and manage their accounts through a responsive user interface.

## Features

- **User Authentication:** User registration, login, and logout.
- **Product Catalog:** Browse products, view product details, and search for products.
- **Shopping Cart:** Add, remove, and update product quantities.
- **Order Management:** Place orders and view order history.
- **Admin Dashboard:** Manage products, categories, users, and orders.
- **Responsive Design:** User-friendly interface for desktop and mobile devices.
- **Database Integration:** Store users, products, carts, and orders in MongoDB.
- **REST API:** Backend APIs built with Express.js and Node.js.

## Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Axios or Fetch API
- React Router

### Backend
- Node.js
- Express.js
- RESTful APIs
- JWT authentication

### Database
- MongoDB
- Mongoose

## Project Architecture

1. React.js provides the user interface.
2. React communicates with the backend through HTTP requests.
3. Express.js handles API routes and application logic.
4. Node.js runs the backend server.
5. MongoDB stores product, user, and order information.

## Project Structure

```text
mern-ecommerce/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── services/
│       ├── App.jsx
│       └── main.jsx
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── .gitignore
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB local installation or MongoDB Atlas account
- Git

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd mern-ecommerce
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_value
```

Start the backend:

```bash
npm run dev
```

### 3. Set up the frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser.

## Future Enhancements

- Payment gateway integration
- Product ratings and reviews
- Wishlist functionality
- Product filtering and sorting
- Order tracking
- Email notifications
- Deployment to a cloud platform

## Learning Outcomes

This project demonstrates full-stack development, REST API creation, CRUD operations, MongoDB database design, user authentication, React state management, and frontend-backend integration.

## Author

**Mushraf Syed**

GitHub: https://github.com/mushra4444-maker

---

*This project is intended for educational purposes and full-stack development practice.*
