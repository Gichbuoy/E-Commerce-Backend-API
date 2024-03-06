## E-Commerce Backend API

- This is a backend API for an E-Commerce platform built using Node.js. It provides various endpoints for managing products, orders, users, and authentication.


## Features

- **Product Management**: CRUD operations for managing products.
- **Order Management**: Create, read, update, and delete orders.
- **User Management**: Register, login, and manage user accounts.
- **Authentication**: JWT-based authentication for securing API endpoints.
- **Validation**: Input validation and error handling.
- **Authorization**: Role-based access control for restricting endpoints based on user roles.
- **Database**: Integration with MongoDB for data storage.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- Helmet for security headers


## Installation

1. Clone the repository:
```
git clone https://github.com/Gichbuoy/E-Commerce-Backend-API.git
```

2. Navigate to the project directory:
```
cd E-Commerce-Backend-API
```

3. Install dependencies
```
npm install
```


4. Set up environment variables by creating a `.env` file and adding the following variables:

```
PORT=3000
MONGOCOMPASS=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

5. Start the server

```
npm start
```



## Usage

Once the server is running, you can access the API endpoints using tools like [Postman](https://learning.postman.com/docs/introduction/overview/) or [Insomnia](https://docs.insomnia.rest/) or directly from the [Frontend application](https://github.com/Gichbuoy/E-commerce-website).


## Screenshots

`Connection to mongoDB`
![Screenshot1](./Screenshots/Screenshot%20(130).png)

## API Endpoints

For detailed information about the available endpoints, refer to the [API Documentation](./API_DOCUMENTATION.md).

## Authentication

Authentication is required for certain endpoints. To authenticate, include a JWT token in the request headers:


To obtain a JWT token, you must first register as a user and then login using your credentials.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




