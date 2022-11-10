import express from "express";

// Import School Controller
import { //importramos todos los Controller que tenemos 
    getSchools,
    getSchoolById,
    createSchool,
    updateSchool,
    deleteSchool
 } from "../controllers/schools.js";

 const Router = express.Router();

 // Route get all schools
 Router.get('/schools', getSchools);
// Route get product by id
Router.get('/schools/:id', getSchoolById);
// Route create a new p
Router.post('/schools', createSchool);
// Route update product by id
Router.put('/schools/:id', updateSchool);
// Route delete product by id
Router.delete('/schools/:id', deleteSchool);
 
// export router
export default Router;