const mongoose = require('mongoose')
const bcrypt= require('bcryptjs')
const jwt = require("jsonwebtoken")

const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:"Name is required",

    },
    email:{
        type:String,
        required:"Email address is required",
        unique:true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
   

    },
    password:{
        type:String,
        required:"Password is required",
        minLength:[3,"Password must be atleast 3 characters long"]   ,
        select:false 
    }
}, {timestamps:true})

userModel.pre("save", function(){

    if(!this.isModified("password")){
        return;
    }

    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);

})

userModel.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

userModel.methods.getJwtToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET, {
        expiresIn:process.env.JWT_EXPIRE,
    })
}

const User = mongoose.model("user", userModel);

module.exports = User;