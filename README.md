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
