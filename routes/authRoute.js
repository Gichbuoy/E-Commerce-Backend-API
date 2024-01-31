const express = require("express");
const { createUser, loginUserCtrler, getAllUser, getUser, deleteUser, updateUser, blockUser, unblockUser } = require("../controller/user.controller");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrler);
router.get('/all-users', getAllUser);
router.get('/:id', authMiddleware, isAdmin, getUser);
router.delete('/:id', deleteUser);
router.put('/:edit-user', authMiddleware, updateUser);
router.put('/:block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/:unblock-user/:id', authMiddleware, isAdmin, unblockUser);

module.exports = router;