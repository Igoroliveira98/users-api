const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.json({
        status: 201,
        date: new Date().toLocaleString()
    })
})


module.exports = routes