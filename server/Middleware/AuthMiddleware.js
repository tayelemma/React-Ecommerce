const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");

const SECRET_KEY = process.env.SECRET_KEY;

module.exports.authorize = async(req, res, next)=>{
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, SECRET_KEY);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token")
    }
}


//Checking user if they are admin.
module.exports.admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error("Not authorized as an Admin.")
    }
}