# Bookshelf API

A robust and efficient RESTful API for managing a digital bookshelf, built with Node.js and the Hapi framework.

## Features

- Create, read, update, and delete books
- Get all books with optional query parameters for filtering
- Mark books as read or unread
- Comprehensive error handling
- Data persistence using in-memory storage (easily extendable to database storage)

## Technology Stack

- Node.js
- Hapi Framework
- ESLint (Airbnb style guide)
- Nanoid for generating unique IDs
- Nodemon for development

## Developer Certification

This project was developed to complete the "Belajar Membuat Aplikasi Back-End untuk Pemula" course from Dicoding Indonesia. The certification details are as follows:

- Course: Belajar Membuat Aplikasi Back-End untuk Pemula
- Date of Completion: July 25, 2024
- Certificate ID: L4PQ17YOVXO1
- Verification Link: [dicoding.com/certificates/L4PQ17YOVXO1](https://www.dicoding.com/certificates/L4PQ17YOVXO1)
- Valid Until: July 25, 2027

The course covered essential topics relevant to this project, including:

- Introduction to Back-End Development
- Fundamentals of Node.js
- Building Web Services with Node.js and Hapi Framework
- Deploying Web Services
- Consuming and Testing RESTful APIs using Postman

This certification ensures that the developer has the necessary skills and knowledge to build modern, efficient, and scalable back-end applications.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/bookshelf-api.git
   ```
2. Navigate to the project directory:
   ```
   cd bookshelf-api
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

For production:
```
npm run start
```

For development (using nodemon):
```
npm run start-dev
```

The server will start on `http://localhost:9000`.

### Testing the API
To ensure the API functions correctly and meets all the specified criteria, we provide a Postman Collection and Environment for testing. Follow these steps to use them:

Download the test files from this link.
Extract the downloaded ZIP file. You should get two JSON files:

Bookshelf API Test.postman_collection.json
Bookshelf API Test.postman_environment.json


Open Postman application on your computer.
Click on the "Import" button located in the top left corner of the Postman application.
In the import window, click on "Upload Files" and select both JSON files you extracted earlier.
After the import is complete, you will see "Bookshelf API Test" collection and environment in your Postman workspace.

Now you can use these to test your Bookshelf API thoroughly. The collection includes various requests that cover all the required functionalities of the API.
To run the tests:

Make sure your Bookshelf API server is running.
In Postman, select the "Bookshelf API Test" environment from the environment dropdown (usually in the top right corner).
Open the "Bookshelf API Test" collection.
You can either run individual requests or use the "Run Collection" feature to run all tests at once.

These tests will help you verify that your API is working correctly and meeting all the specified requirements.

## Project Structure

```
bookshelf-api/
├── src/
│   ├── scripts/
│   │   ├── books.js
│   │   ├── handlers.js
│   │   ├── routes.js
│   │   └── server.js
├── eslint.config.mjs
├── package.json
└── README.md
```

## API Endpoints

- `POST /books`: Add a new book
- `GET /books`: Get all books
- `GET /books/{bookId}`: Get a book by ID
- `PUT /books/{bookId}`: Edit a book by ID
- `DELETE /books/{bookId}`: Delete a book by ID

### Query Parameters

The `GET /books` endpoint supports the following query parameters:

- `name`: Filter books by name (case-insensitive)
- `reading`: Filter books by reading status (0 or 1)
- `finished`: Filter books by finished status (0 or 1)

## Development

To ensure code quality and consistency, this project uses ESLint with the Airbnb style guide. To run the linter:

```
npx eslint .
```

## API Integration

This application serves as a back-end API. To interact with it, you can use tools like Postman or integrate it with a front-end application. Please refer to the API documentation (endpoints section above) for more details on how to use each endpoint.

## License

This project is licensed under the ISC License.

## Author

Muhammad Azizsyah Putra

## Acknowledgments

- Dicoding Indonesia for providing the comprehensive Back-End Development course and project guidelines
- Hapi framework for efficient API development
- ESLint and Airbnb for maintaining code quality
- The Node.js community for excellent documentation and resources
