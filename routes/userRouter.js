const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userControllers");

// ROUTES

router.get("/", getAllUsers);
router.get("/:id", getUserById);

router.use(auth);

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
