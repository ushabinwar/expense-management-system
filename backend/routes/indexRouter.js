const express = require("express");
const router = express.Router()
const { homepage, userSignup, userSignin, userSignout, home, currentUser } = require("../controllers/indexController");
const { isAuthenticated } = require("../middlewares/auth");

router.get("/", homepage)

router.post("/user/signup", userSignup )

router.post("/user/signin", userSignin )

router.get("/user/home", isAuthenticated, home )

router.get("/user/currentuser", isAuthenticated, currentUser )

router.get("/user/signout", isAuthenticated, userSignout )

module.exports = router