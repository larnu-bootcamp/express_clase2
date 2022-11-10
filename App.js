// Import express
import express from "express";
// Import connection
import db from './config/database.js';
// Import router
import Router from './routes/routes.js';
// Import cors
import cors from 'cors'

const app = express ();
// use express json
app.use(express.json());

// var corsOptions = {
//   origin: 'http://example.com',
// }
app.use(cors());

// Testing database connection

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.error('Unable to connect to the database:');
}

// use Router
app.use(Router);

app.listen(4000, () => console.log('Servidor corriendo en localhost 4000....'))