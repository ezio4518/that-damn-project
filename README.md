# StyleSpaces 🛋️✨

StyleSpaces is a full-stack e-commerce platform designed for both users and administrators. It streamlines furniture purchasing with a user-friendly interface while providing robust admin tools for managing products and orders.

---

## Features 🚀

- **User-Friendly Shopping Experience**: 🛒 Browse, filter, and purchase furniture with ease.
- **Admin Panel**: 🛠️ Manage products, orders, and categories efficiently with image uploads powered by Multer.
- **Secure Payments**: 💳 Integrated Stripe payment gateway for fast and secure transactions.
- **Cross-Device Responsiveness**: 📱 Optimized for seamless use across devices.
- **Authentication**: 🔒 Secure login and signup using JWT-based authentication.

---

## Technologies Used 🛠️

- **Frontend**: ⚛️ ReactJS for building the user interface.
- **Backend**: 🚀 ExpressJS for server-side logic.
- **Database**: 🗄️ MongoDB for storing user, product, and order data.
- **File Uploads**: 📂 Multer for handling product image uploads.
- **Payments**: 💳 Stripe for payment processing.
- **Authentication**: 🔒 JWT for secure user authentication.

---

## Folder Structure 📂

### 1. **Admin**
   - Contains the admin panel for managing products and orders.
   - Built with ReactJS and includes features like product listing, order management, and image uploads.

### 2. **Backend**
   - Implements the server-side logic, including APIs for authentication, product management, and payment processing.
   - Uses ExpressJS, MongoDB, and integrates Stripe for payments.

### 3. **Frontend**
   - Provides the user-facing interface for browsing products, managing the cart, and placing orders.
   - Built with ReactJS and includes responsive design for cross-device compatibility.

---

## Installation 💻

To get started with StyleSpaces, follow these steps:

### Clone the Repository:
```bash
git clone https://github.com/ezio4518/style-spaces.git
```

### Navigate to the Project Directory:
```bash
cd style-spaces
```

### Install Dependencies:
Navigate to each folder (admin, backend, frontend) and install dependencies:
```bash
cd admin
npm install

cd ../backend
npm install

cd ../frontend
npm install
```

---

## Running the Application Locally 🏃‍♂️

### Start the Backend Server:
Navigate to the backend folder and run:
```bash
npm start
```

### Start the Admin Panel:
Navigate to the admin folder and run:
```bash
npm run dev
```

### Start the Frontend:
Navigate to the frontend folder and run:
```bash
npm run dev
```

### Access the Application:
- **Frontend**: Open your browser and navigate to `http://localhost:3000`.
- **Admin Panel**: Open your browser and navigate to `http://localhost:3001`.

---

## Contributing 🤝

If you'd like to contribute to StyleSpaces, please fork the repository and submit a pull request with your changes. Ensure that your code follows the project's coding standards and includes appropriate tests.

