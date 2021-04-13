const knex = require("../database/connection");
const bcrypt = require("bcryptjs");

module.exports = {
    async index(req, res, next) {
        try {
            
            const results = await knex("users");

            res.json(results);

        } catch (error) {
            next(error);
        }
    },

    async create(req, res, next) {
        try {
           
            const { name, username, email, password } = req.body;

            await knex("users").insert({
                name,
                username,
                email,
                password: bcrypt.hashSync(password, 10)
            });

            res.json({
                status: 200,
                message: "New user created into Database!",
                name,
                username,
                email
            })

        } catch (error) {
            next(error)
        }
    },

    async update(req, res, next) {
        const { name, username, email, password } = req.body;

        const { id } = req.params;

        await knex("users").update({
            name,
            username,
            email,
            password: bcrypt.hashSync(password, 10)
        }).where({id});


        res.json({
            status: 200,
            message: "User updated",
            name,
            email
        })
    },

    async delete(req, res, next) {
        const { id } = req.params;

        await knex("users").where({ id }).del();

        res.json({
            status: 200,
            message: "One user was deleted!",
            id
        })
    }
}