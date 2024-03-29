const routes = require("express").Router();

const UserController = require("./controllers/UserController");

routes.get("/users", UserController.index);
routes.post("/register", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);


module.exports = routes