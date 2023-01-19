const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");


//Checked
module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const userId = user._id;

        if (user) {
            console.log(user);
            if (bcrypt.compare(password, user.password)) {
                res.json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user._id),
                    createdAt: user.createdAt
                })
            } else {
                res.send({ success: 0, error: "Wrong Password" })
            }
        } else {
            res.send({ success: 0, error: "Wrong email" })
        }
    } catch (error) {
        res.send({ success: 0, error: "Login Error" })
    }
};

//Checked
module.exports.signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            res.status(400)
            throw new Error("User already exists");
        }
        const hash = await bcrypt.hash(password, 5);
        const user = await User.create({
            name,
            email,
            password: hash,
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            });
        } else {
            res.status(400)
            throw new Error("Invalid user Data")
        }
    } catch (e) {
        next(e);
    }
};


//Checked
module.exports.getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt
            });
        } else {
            res.status(404);
            throw new Error("User not Found");
        }
    } catch (e) {
        next(e);
    }
};


//Checked
module.exports.updateProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password;
            }
            const updateUser = await user.save();
            res.json({
                _id: updateUser._id,
                name: updateUser.name,
                email: updateUser.email,
                isAdmin: updateUser.isAdmin,
                createdAt: updateUser.createdAt,
                token: generateToken(updateUser._id)
            })
        } else {
            res.status(404);
            throw new Error("User not Found");
        }
    } catch (e) {
        next(e);
    }
};


