const express = require("express");
const { isAuthenticated } = require("../middlewares/auth");
const { createIncome, getAllIncome, updateIncome, deleteIncome } = require("../controllers/incomeCntroller");
const router = express.Router()

router.post("/create", isAuthenticated, createIncome)

router.get("/getAllIncome", isAuthenticated, getAllIncome)

router.post("/update/:id", isAuthenticated, updateIncome)

router.delete("/delete/:id", isAuthenticated, deleteIncome)

module.exports = router;