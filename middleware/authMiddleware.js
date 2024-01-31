// verify jwt token and check if user is admin
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1];
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const user = await User.findById(decoded?.id);
                req.user = user;
                next();
            }
        }
        catch (error) {
            throw new Error("Not Authorized, please login again!");
        }
    } else {
        throw new Error(" There is no token attatched to header");
    }
});

module.exports = { authMiddleware };