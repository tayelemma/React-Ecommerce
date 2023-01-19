const jwt = require("jsonwebtoken");
const SECRET_KEY = "test123";

module.exports.generateToken = (id) => {
    return jwt.sign({ id }, SECRET_KEY, {
        expiresIn: "30d",
    } )
}