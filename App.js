// Import express
const express = require("express");
// Import cors
const cors = require("cors");
// Import connection
const db = require("./config/database.js");
// import db from "./config/database.js";
// Import router
const router = require ("./routes/routes.js");
// Init express
const app = express(); 
// use express json

app.use(express.json());

// var corsOptions = {
//   origin: 'http://example.com',
// }

app.use(cors());

//Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

// use router
app.use(router);

app.listen(4000, () => console.log('Servidor corriendo en localhost:4000...'))