const express = require("express");
const { createUser, loginUserCtrler, getAllUser, getUser, deleteUser, updateUser } = require("../controller/user.controller");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrler);
router.get('/all-users', getAllUser);
router.get('/:id', authMiddleware, getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;