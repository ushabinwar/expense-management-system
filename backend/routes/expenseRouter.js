const express = require("express");
const { isAuthenticated } = require("../middlewares/auth");
const { createExpense, getAllExpense, deleteExpense, updateExpense } = require("../controllers/expenseController");
const router = express.Router()

router.post("/create", isAuthenticated, createExpense)

router.get("/getAllExpense", isAuthenticated, getAllExpense)

router.post("/update/:id", isAuthenticated, updateExpense)

router.delete("/delete/:id", isAuthenticated, deleteExpense)





module.exports = router;