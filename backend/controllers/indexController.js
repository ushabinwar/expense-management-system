const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { sendToken } = require("../utils/SendToken");

exports.homepage = catchAsyncErrors(async (req, res, next) => {
    res.json({message:"home page"})
})

exports.userSignup = catchAsyncErrors(async (req, res, next) => {
    // res.json(req.body)
    const {name, email, password} =  req.body;

    if(!name || !email || !password){
        return next(new ErrorHandler("Please provide all required fileds", 400))
    }

    const existingUser = await User.findOne({ email });

    if(existingUser){
      return next(new ErrorHandler("User already exists", 409))        
    }

    const user = await User.create({
        name:name,
        email:email,
        password:password,
    })

    // return res.status(201).json({
    //     success:true,
    //     message:"User Created Successfully",
    //     user
    // })

    sendToken(user, 201, res)

})

exports.userSignin = catchAsyncErrors(async (req, res, next) => {
    const user =  await User.findOne({email:req.body.email}).select("+password");

    if(!user){
        return next(new ErrorHandler("User not found with this email address", 404))
    }

    const isMatch = user.comparePassword(req?.body?.password)

    if(!isMatch){
        return next(new ErrorHandler("wrong credentials", 401))
    }

    // return res.status(200).json({
    //     success:true,
    //     message:"User logged in Successfully",
    //     user
    // })
    sendToken(user, 200, res)
})

exports.userSignout =  catchAsyncErrors(async (req, res, next) => {
    res.clearCookie("token")
    res.status(200).json({
        success:true,
        message:"User Signed Out Successfully"
    })
})

exports.home=  catchAsyncErrors(async (req, res, next) => {
    
    res.status(200).json({
        success:true,
        message:"homepage"
    })
})

exports.currentUser=  catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.id)
    res.status(200).json({
        user,
        success:true,
        message:"Logged in user details"
    })
})



