# Assessment Manager Backend

This is the backend application for the Assessment Manager project. It is built using Node.js and Express and provides the RESTful APIs required for managing assessments.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)

## Introduction

The backend of the Assessment Manager application provides APIs necessary to manage candidates, questions, and assessments. It is built using Node.js and Express, ensuring a scalable and maintainable server-side solution.

## Installation

To set up the development environment and install the necessary dependencies, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sakshisinghcreates/Mckinsey_Assignment_SakshiSingh.git
    ```

2. **Navigate to the backend directory:**

    ```bash
    cd assessment-manager-backend
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory of the project with the following content:

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/myDatabase
    ```

   Replace `myDatabase` with your desired database name.

## Running the Application

To run the application locally:

1. **Start the server:**

    ```bash
    npm run dev
    ```

   The backend server will be running at `http://localhost:3000`.

## Testing

To run tests for the application:

1. **Run unit tests:**

    ```bash
    npm test
    ```

## Directory Structure

- `src/`: Contains the source code for the backend.
  - `routes/`: Contains the route handlers for the API endpoints.
  - `controllers/`: Contains the business logic for handling requests.
  - `models/`: Contains the data models and schema definitions.
  - `index.ts`: The main application file where the Express server is configured and MongoDB connection is established.

## Contributing

Contributions to the Assessment Manager Backend are welcome! Please follow the guidelines below:

1. **Fork the repository.**
2. **Create a new branch for your changes.**
3. **Submit a pull request with a clear description of the changes.**

