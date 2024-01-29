const express = require("express");
const { createUser, loginUserCtrler } = require("../controller/user.controller");
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrler);

module.exports = router;