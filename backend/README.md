### Backend Steps:
- In app.js import express, listen to port and use get for "/" route.
- Create db file in config folder to connect to the database using mongoURI.
    - process.exit(1), 1 means exit with faliure, 0 means success!
- Create products collection, to do so we'll create model using mongoose(documentation):
  - create the productSchema using mongoose.Schema()