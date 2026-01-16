const mongoose = require('mongoose')

const expenseModel = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    amount:{
        type:Number,
        required:[true, "Amount is required"],
    },
    category: {
      type: String,
      required: [true, "Expense category is required"],
      enum: [
        "Food",
        "Rent",
        "Travel",
        "Shopping",
        "Bills",
        "Health",
        "Education",
        "Entertainment",
        "Other",
      ],
    },
    paymentMode: {
      type: String,
      enum: ["Cash", "UPI", "Card", "NetBanking"],
      default: "Cash",
    },
    title: {
      type: String,
      required: [true, "Expense title is required"],
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },  
    description: {
      type: String,
    },
    
}, {timestamps:true})



const Expense = mongoose.model("expense", expenseModel);

module.exports = Expense;