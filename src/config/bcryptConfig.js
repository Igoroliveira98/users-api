const bcrypt = require("bcryptjs");

module.exports = {
    async hashPassword(password, salt = 10) {
        return await bcrypt.hashSync(password, salt);
    },

    async comparePassword(password, hashedPassword) {
        return await bcrypt.compareSync(password, hashedPassword);
    }
}