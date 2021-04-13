const bcrypt = require("bcryptjs")


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: "Patrick Mahomes",
          username: "babygoat",
          email: "mahomes@chiefs.com",
          password: bcrypt.hashSync("123456", 10)
        },
        {
          name: "Travis Kelce",
          username: "bestTE",
          email: "kelce@chiefs.com",
          password: bcrypt.hashSync("789101112", 10)
        },
        {
          name: "Tyrann Mathieu",
          username: "HoneyBadger",
          email: "mathieu@chiefs.com",
          password: bcrypt.hashSync("131415", 10)
        }
      ]);
    });
};
