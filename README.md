# To-Do List Application

![To-Do List Application Screenshot](todo-ss.png)

## Overview

This is a fullstack To-Do List application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to manage their tasks efficiently with features like adding, editing, and deleting tasks.

## Objective

Develop a fullstack web application to help users manage their tasks efficiently.

## Duration

September 2022 — December 2022

## Team Size

Group of 2 (Backend and Frontend), but I completed all

## Tech Stack

- **Frontend:** ReactJS
- **Backend:** ExpressJS, Node.js
- **Database:** MongoDB
- **Containerization:** Docker

## Key Features

- **Task Management:** Create, edit, and delete tasks with ease.
- **Task Status:** Mark tasks as completed or pending.
- **Responsive UI:** Supports various screen resolutions.
- **RESTful API:** Backend API built with ExpressJS to handle CRUD operations.

## Achievements

- **Efficient Task Management:** Provided users with a simple and effective way to manage their tasks.
- **Scalable Architecture:** Built a scalable and maintainable codebase using the MERN stack.
- **Containerized Deployment:** Utilized Docker for easy deployment and scalability.
- **CI/CD Integration:** Implemented continuous integration and deployment pipelines.

## Setup and Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/FullStack-MERN-Docker-CICD-TodoList-2022.git
    cd FullStack-MERN-Docker-CICD-TodoList-2022
    ```

2. **Set up environment variables:**
    Create a `.env` file in the backend directory with the following content:
    ```env
    DB_URI=mongodb://username:password@host:port/database
    ```

3. **Install dependencies:**
    ```sh
    npm install
    ```

4. **Start the backend server:**
    ```sh
    npm run start
    ```

5. **Start the frontend server:**
    ```sh
    cd frontend
    npm install
    npm start
    ```