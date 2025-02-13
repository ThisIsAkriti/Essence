
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
- npm install cors
###
        const cors = require('cors');

        app.use(cors({
            origin: 'http://localhost:5173', 
            credentials: true
        }));

## Project Structure
The frontend project structure is as follows:(to be updated....)


## License
This project is licensed under the MIT License.