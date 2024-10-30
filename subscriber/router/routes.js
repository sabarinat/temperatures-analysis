const express = require('express');
const routes = express.Router();
const userController = require('../src/controller/userController');
const temperatureController = require('../src/controller/temperatureController');
const authentiacte = require('../src/common/authentication')

routes.post("/login", userController.login);
routes.post("/signUp", userController.signup);
routes.get("/getTemperature", authentiacte.authenticate, temperatureController.getTemperature)



// Additional routes for specific functionalities
// ...


module.exports = routes;