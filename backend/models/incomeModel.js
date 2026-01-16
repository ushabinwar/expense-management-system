const mongoose = require('mongoose')

const incomeModel = new mongoose.Schema({
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user",
      required:true,
    },
    amount:{
      type:Number,
      required:[true, "Amount is required"],
      min: [1, "Amount must not be less than 1"],

    },
    title: {
      type: String,
      required: [true, "income title is required"],
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



const Income = mongoose.model("income", incomeModel);

module.exports = Income;