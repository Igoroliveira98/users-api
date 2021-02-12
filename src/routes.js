// Config routes

const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.json({
        date: new Date()
    })
})

module.exports = routes