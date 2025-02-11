# Essenc Backend

This repository contains the backend part of the project. The backend is built using Node.js, Express.js, and MongoDB, with Mongoose as the ORM. Postman is used for API testing, and MongoDB Compass is used for database management.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Backend Steps](#backend-steps)
5. [Installation](#installation)

## Introduction
The Perfume Collection backend is designed to handle all server-side logic, including managing the perfume catalog, user authentication, and data storage. This backend leverages Node.js and Express.js for a robust and scalable architecture.

## Features
- **CRUD Operations:** Create, Read, Update, and Delete perfumes in the collection.
- **User Authentication:** Secure user registration and login.
- **API Endpoints:** RESTful API endpoints for seamless frontend-backend integration.
- **Database Management:** Efficient data handling using MongoDB and Mongoose.

### Backend Steps:
- In app.js import express, listen to port and use get for "/" route.
- Create db file in config folder to connect to the database using mongoURI.
    - process.exit(1), 1 means exit with faliure, 0 means success!
- Create products collection, to do so we'll create model using mongoose(documentation):
  - create the productSchema using mongoose.Schema()