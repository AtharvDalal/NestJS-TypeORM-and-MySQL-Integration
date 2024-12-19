<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  # **NestJS with TypeORM And MySQL**

This project is a backend API built with **NestJS**, **TypeORM**, and **MySQL**. It demonstrates how to use TypeORM with SQL databases and implement **One-to-One**, **One-to-Many**, and **Many-to-One** relationships.

---

##  **Features**

-  **User CRUD Operations**: Create, read, update, and delete users.
-  **User Profile**: Create and fetch profiles for users.
-  **User Posts**: Create and associate posts with users.
-  **MySQL Integration**: Use MySQL with TypeORM to manage data.

---

## ⚙️ **Installation**

Follow these steps to set up and run the project locally:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/AtharvDalal/NestJs-with-TypeORM-MySql
    cd NestJs-with-TypeORM-MySql
    ```

2. **Install Dependencies**

    Ensure **Node.js** is installed. Then run:

    ```bash
    npm install
    ```

3. **Set up the Environment Variables**

    Create a `.env` file in the root directory with the following values:

    ```env
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=root
    DB_PASSWORD=yourpassword
    DB_DATABASE=yourdatabase
    PORT=3000
    ```

4. **Run the Server**

    Start the server in development mode:

    ```bash
    npm run start:dev
    ```

    The server will run at:  
    🌐 `http://localhost:3000`

---

## 📄 **API Routes**

### **GET /user** - Fetch all users.
- **Response**:

    ```json
    [
      {
        "id": 1,
        "username": "john_doe"
      },
      {
        "id": 2,
        "username": "jane_doe"
      }
    ]
    ```

---

### **POST /user** - Create a new user.
- **Request Body**:

    ```json
    {
      "username": "john_doe",
      "password": "password123"
    }
    ```

- **Response**:

    ```json
    {
      "id": 1,
      "username": "john_doe"
    }
    ```

---

### **PUT /user/:id** - Update an existing user by ID.
- **Request Body**:

    ```json
    {
      "username": "john_doe_updated",
      "password": "newpassword123"
    }
    ```

- **Response**:

    ```json
    {
      "id": 1,
      "username": "john_doe_updated"
    }
    ```

---

### **DELETE /user/:id** - Delete a user by ID.
- **Response**:

    ```json
    {
      "message": "User deleted successfully"
    }
    ```

---

### **POST /user/:id/profile** - Create a profile for a user.
- **Request Body**:

    ```json
    {
      "name": "John",
      "surname": "Doe",
      "email": "john.doe@example.com",
      "age": 30,
      "address": "123 Main Street"
    }
    ```

- **Response**:

    ```json
    {
      "name": "John",
      "surname": "Doe",
      "email": "john.doe@example.com",
      "age": 30,
      "address": "123 Main Street",
      "userId": 1
    }
    ```

---

### **GET /user/:id/profile** - Fetch a user's profile by ID.
- **Response**:

    ```json
    {
      "name": "John",
      "surname": "Doe",
      "email": "john.doe@example.com",
      "age": 30,
      "address": "123 Main Street"
    }
    ```

---

### **POST /user/:id/posts** - Create a post for a user.
- **Request Body**:

    ```json
    {
      "title": "My First Post",
      "desc": "This is the description of my first post."
    }
    ```

- **Response**:

    ```json
    {
      "title": "My First Post",
      "desc": "This is the description of my first post.",
      "userId": 1
    }
    ```





## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
