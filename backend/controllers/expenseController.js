const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const Expense = require("../models/expenseModel");
const Income = require("../models/incomeModel");
const mongoose = require("mongoose");

exports.createExpense=  catchAsyncErrors(async (req, res, next) => {
    const {title, amount, category, paymentMode, description, date} = req.body;

    if(!title || !amount || !category || !paymentMode){
        return next(new ErrorHandler("Please provide all required fields", 400))
    }

    const expense = await Expense.create({
        user:req.id,
        title,
        amount,
        category,
        paymentMode,
        description,
        date
    })

    res.status(201).json({
        success:true,
        message:"Expense Created Successfully",
        expense
    })
})

exports.getAllExpense = catchAsyncErrors(async (req, res, next) => {
   const allExpenses = await Expense.find({user:req.id}).sort({createdat:-1})

    res.status(200).json({
        success:true,
        message:"Expense Fetched Successfully",
        allExpenses
    })
})
exports.deleteExpense = catchAsyncErrors(async (req, res, next) => {
    const {id} = req.params;

    const expense = await Expense.findById(id)

    if (!expense) {
      return next(new ErrorHandler("Expense not found", 404));
    }

    if (expense?.user?.toString() !== req?.id.toString()) {
      return next(new ErrorHandler("You are not allowed to delete this expense", 403));
    }

    await expense.deleteOne();

    res.status(200).json({
        success:true,
        message:"Expense Deleted Successfully",
    })
})

exports.updateExpense = catchAsyncErrors(async (req, res, next) => {
    const {id} =  req?.params;

    const expense = await Expense.findOneAndUpdate(
        { _id: id, user: req.id },
        req.body,
        { 
            new: true,
            runValidators: true
      }
    );

    if (!expense) {
      return next(new ErrorHandler("Expense not found or unauthorized", 404));
    }

    res.status(200).json({
        success:true,
        message:"Expense Updated Successfully",
        expense
    })
})

exports.totalBalance = catchAsyncErrors(async (req, res, next) => { 
    const expenseData =  await Expense.aggregate([
        {
            $match:{
                user:new mongoose.Types.ObjectId(req.id)
            }
        },
        {
            $group:{
                _id:null,
                totalExpense:{$sum:"$amount"},
                expenseCount: { $sum: 1 }
            }
        },
       
    ])

    const incomeData =  await Income.aggregate([
        {
            $match:{
                user:new mongoose.Types.ObjectId(req.id)
            }
        },
        {
            $group:{
                _id:null,
                totalIncome:{$sum:"$amount"},
                incomeCount: { $sum: 1 }
            }
        },
       
    ])

    const expenseTotal = expenseData[0]?.totalExpense || 0
    const expenseCount = expenseData[0]?.expenseCount || 0

    const incomeTotal = incomeData[0]?.totalIncome || 0
    const incomeCount = incomeData[0]?.incomeCount || 0

    const totalBalance = incomeTotal - expenseTotal

    res.status(200).json({
        success:true,
        message:"Expense Updated Successfully",
        data:{
            expenseTotal,
            expenseCount,
            incomeTotal,
            incomeCount, 
            totalBalance
        }
    })
})

