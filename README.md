## Task Manager Application
## Overview
The Task Manager web application is a feature-rich project built using the MERN stack (MongoDB, Express, React, and Node.js). This application provides users with a platform to manage their tasks efficiently with options to create, read, update, and delete tasks. It includes robust state management using Redux to handle the flow of data seamlessly across components.

## Features
Task Management: Users can create new tasks, update existing tasks, and delete tasks. 

Interactive UI: User-friendly design developed with React.js to ensure a smooth user experience.

State Management: Redux integration for efficient state handling and data consistency.

RESTful API: Node.js and Express.js for server-side logic, providing endpoints to perform CRUD operations.

Database: MongoDB for reliable data storage and retrieval.


## Technologies Used 

## Frontend
React.js
Redux (for state management)
Tailwind CSS

## Backend
Node.js
Express.js
Database
MongoDB


## Installation and Setup
Clone the repository
git clone https://github.com/gokul6466/TaskManager.git 

cd TaskManager

## Install dependencies for the frontend
cd client 

npm install

## Install dependencies for the backend
cd server

npm install

## Set up environment variables
## Create a .env file in the server directory and include the following: 
MONGO_URI=your_mongo_db_connection_string 

PORT=your_port_number 

JWT_SECRET=your_jwt_secret

## Run the application
## Backend: Run the server 
cd server 

npm start

## Frontend: Run the React client 
cd client 

npm run dev

## Usage
Access the app in your browser: Navigate to http://localhost:3000.

Create, update, and delete tasks: Use the intuitive UI to manage tasks efficiently.
