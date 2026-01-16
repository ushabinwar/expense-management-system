const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const Income = require("../models/incomeModel");
const ErrorHandler = require("../utils/ErrorHandler");

exports.createIncome=  catchAsyncErrors(async (req, res, next) => {
    const {title, amount, description, date} = req.body;

    if(!title || !amount){
        return next(new ErrorHandler("Please provide all required fields", 400))
    }

    const income = await Income.create({
        user:req.id,
        title,
        amount,
        description,
        date
    })

    res.status(201).json({
        success:true,
        message:"Income Created Successfully",
        data:income
    })
})


exports.getAllIncome = catchAsyncErrors(async (req, res, next) => {
   const allIncome = await Income.find({user:req.id}).sort({createdat:-1})

    res.status(200).json({
        success:true,
        message:"Incomes Fetched Successfully",
        data:allIncome
    })
})


exports.updateIncome = catchAsyncErrors(async (req, res, next) => {
    const {id} =  req?.params;

    const income = await Income.findOneAndUpdate(
        { _id: id, user: req.id },
        req.body,
        { 
            new: true,
            runValidators: true
      }
    );

    if (!income) {
      return next(new ErrorHandler("income not found or unauthorized", 404));
    }

    res.status(200).json({
        success:true,
        message:"income Updated Successfully",
        data:income
    })
})


exports.deleteIncome = catchAsyncErrors(async (req, res, next) => {
    const {id} = req.params;

    const income = await Income.findById(id)

    if (!income) {
      return next(new ErrorHandler("Income not found", 404));
    }

    if (income?.user?.toString() !== req?.id.toString()) {
      return next(new ErrorHandler("You are not allowed to delete this income", 403));
    }

    await income.deleteOne();

    res.status(200).json({
        success:true,
        message:"Income Deleted Successfully",
    })
})

