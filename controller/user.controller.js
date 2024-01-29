const User = require("../models/user.model");

const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email }); // check if user exists
    if (!findUser) {
        // Create a new User
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        res.json({
            msg: "User  Already Exists",
            success: false,
        });
    }
};

module.exports = { createUser };