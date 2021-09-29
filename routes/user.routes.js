const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

// authentification
router.post("/register", authController.signup);

// user

router.get("/", userController.getAllUsers);

module.exports = router;
