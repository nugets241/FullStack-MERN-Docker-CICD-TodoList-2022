# To-Do List Application

![To-Do List Application Screenshot](todo-ss.png)

## Table of Contents

- [Overview](#overview)
- [Objective](#objective)
- [Duration](#duration)
- [Team Size](#team-size)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Achievements](#achievements)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

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

## Prerequisites

- Node.js (v14 or higher)
- Docker (v20 or higher)
- MongoDB (v4 or higher)

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
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

4. **Start the backend server:**
    ```sh
    cd backend
    npm run start
    ```

5. **Start the frontend server:**
    ```sh
    cd frontend
    npm start
    ```

6. **Using Docker:**
    ```sh
    docker-compose up --build
    ```

## Usage

- Open [http://localhost:3000](http://localhost:3000) to view the frontend in your browser.
- The backend API will be available at [http://localhost:5000/api/v1](http://localhost:5000/api/v1).
