📦 Express.js Product API
A simple RESTful API built with Express.js to manage products. This project demonstrates middleware usage, route handling, in-memory data storage, and more.

🚀 Features
📄 CRUD operations for product resources

🔐 Custom middleware:

Request logger

Basic authentication

⚙️ REST API using Express.js routing

💾 In-memory product database

🛠️ Setup for future enhancements like filtering, pagination, and search

🛠️ Getting Started
Prerequisites
Node.js v18 or higher

Postman, curl, or similar tool for testing endpoints

Installation
Clone the repository:

bash
Copy
Edit
git clone <your-repo-url>
cd your-project-folder
Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
npm start
The server will run on http://localhost:3000 by default.

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get a specific product
POST	/api/products	Create a new product
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product

🧱 Project Structure
bash
Copy
Edit
├── Middleware/
│   ├── auth.js        # Authentication middleware
│   └── logger.js      # Logging middleware
├── routes.js          # API routes
├── server.js          # Main server entry
├── .env.example       # Sample environment variables
├── package.json
└── README.md
🧪 Sample Product Data
On server start, the app uses an in-memory product list:

json
Copy
Edit
[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  },
  ...
]
🔒 Middleware Used
Logger: Logs each incoming request (method, URL, timestamp).

Auth: Basic middleware to simulate authentication.

(Optional) Add more like input validation or error handlers.

📤 Submission Notes
✅ Ensure all required endpoints are working
✅ Middleware is applied
✅ Project runs without error
✅ This README is updated with accurate details

📚 Resources
Express.js Docs

MDN HTTP Methods

RESTful API Guide

