# Express Product API

A RESTful API for product management built with Express.js and MongoDB.

## Description

This project is a Node.js application that provides a complete CRUD (Create, Read, Update, Delete) API for managing products. It uses Express.js as the web framework and MongoDB as the database, with Mongoose for object modeling.

## Features

- RESTful API endpoints for product management
- MongoDB integration with Mongoose ODM
- MVC architecture (Models, Controllers, Routes)
- Error handling
- Data validation

## Prerequisites

- Node.js (v14 or higher recommended)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional):
   - The MongoDB connection string is currently hardcoded in the index.js file
   - For production, consider moving it to an environment variable

## Usage

### Development

Run the application in development mode with hot-reload:

```bash
npm run dev
```

### Production

Run the application in production mode:

```bash
npm run serve
```

The server will start on port 8080 by default.

## API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get a specific product by ID |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product by ID |
| DELETE | `/api/products/:id` | Delete a product by ID |

### Request & Response Examples

#### Get all products

```
GET /api/products
```

Response:
```json
[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "Product 1",
    "quantity": 10,
    "price": 25.99,
    "Image": "image-url.jpg",
    "createdAt": "2023-06-22T19:40:59.495Z",
    "updatedAt": "2023-06-22T19:40:59.495Z"
  },
  {
    "_id": "60d21b4667d0d8992e610c86",
    "name": "Product 2",
    "quantity": 15,
    "price": 19.99,
    "Image": "image-url-2.jpg",
    "createdAt": "2023-06-22T19:41:59.495Z",
    "updatedAt": "2023-06-22T19:41:59.495Z"
  }
]
```

#### Create a new product

```
POST /api/products
```

Request body:
```json
{
  "name": "New Product",
  "quantity": 5,
  "price": 29.99,
  "Image": "new-product-image.jpg"
}
```

Response:
```json
{
  "_id": "60d21b4667d0d8992e610c87",
  "name": "New Product",
  "quantity": 5,
  "price": 29.99,
  "Image": "new-product-image.jpg",
  "createdAt": "2023-06-22T19:43:59.495Z",
  "updatedAt": "2023-06-22T19:43:59.495Z"
}
```

## Project Structure

```
express-test/
├── controllers/
│   └── product.controller.js
├── models/
│   └── product.model.js
├── routes/
│   └── product.route.js
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Dependencies

- express: Web framework for Node.js
- mongoose: MongoDB object modeling tool
- mongodb: MongoDB driver for Node.js
- nodemon: Development dependency for auto-restarting the server

## Author

Royyan

## License

ISC

        Too many current requests. Your queue position is 1. Please wait for a while or switch to other models for a smoother experience.