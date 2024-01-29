const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email }); // check if user exists
    if (!findUser) {
        // Create a new User
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error("User Already Exists");
    }
});

// login 
const loginUserCtrler = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        res.json(findUser);
    } else {
        throw new Error("Invalid Credentials");
    }
});

module.exports = { createUser, loginUserCtrler };