const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/", myController.displayNameFunction);

routes.get("/another", myController.displayAnotherNameFunction);

module.exports = routes;
