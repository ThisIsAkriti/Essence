## ESSENCE: A Collection of Perfumes
##### Overview

"Essence" is a dynamic platform that showcases a curated collection of perfumes. It provides users with detailed information about each fragrance, allowing them to explore and discover new scents.

#
# Backend

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

##

# Essence Frontend (vite + react)

This repository contains the frontend part of the project. The frontend is built using React, Vite, and tailwindCSS for a seamless and responsive user experience.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
8. [License](#license)

## Introduction
The Essence frontend is designed to provide a user-friendly interface for browsing, searching, and managing a collection of perfumes. Leveraging the power of React, Vite, and tailwindCSS, this project offers fast and responsive performance with modern design principles.

## 

## Getting Started
- install create vite@latest
- react , javascript
- npm install 
- npm run dev (to run the project);
    
- ## Routing
    - install react-router-dom
    - Wrap app.jsx in BrowserRouter so as to use any component coming from react-router-dom.
    - now create Route:

            <Routes>
                <Route 
                  path="/" 
                  element={<yourComponenthere />}
                />
            </Routes>

- ### React Redux 
    - our code must manage more state than before!
    - For getting started see documentation and implement! 
    #### https://react-redux.js.org


### axios cors error:
- Issue  with the CORS policy. Browser was blocking the request due to CORS settings on  backend server.
- npm install cors // backend
###
        const cors = require('cors');

        app.use(cors({
            origin: 'http://localhost:5173', 
            credentials: true
        }));

## Project Structure
The frontend project structure is as follows:
    - Navbar - Toggle dark/light mode, route to create page.
    - Homepage 
        - The products are displayed here.
        - Products can be Edited and Deleted.
    - Create Page
        - Create the product({name, price, image});

# 
## Deployment
- app.js
        
        import path from "path";

        app.use(cors({
        origin: ['http://localhost:5173' , "https://essence-46no.onrender.com"],
        credentials: true
        }));

        app.use(express.static(path.join(_dirname, "/frontend/dist")));
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
        });

- frontend
    change the base url with the hosting url

        export const base_url = location.hostname === "localhost"?"http://localhost:xyz" : "https://abcd.com";

- root folder
    properly write the script > "dev" , "build" and "start" command!
## License
This project is licensed under the MIT License.