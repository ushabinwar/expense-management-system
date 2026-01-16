require("dotenv").config({path:"./.env"})
const express = require("express")
const ErrorHandler = require("./utils/ErrorHandler");
const { generateErrors } = require("./middlewares/error");
const app = express()

//db connection
require("./models/database").connectDatabase()

// logger
const logger = require("morgan");
app.use(logger("tiny"))

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//session and cookies
const session = require("express-session");
const cookieparser = require("cookie-parser")
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:process?.env?.EXPRESS_SESSION_SECRET,
}))
app.use(cookieparser());

// router
app.use("/", require("./routes/indexRouter"))
app.use("/expense", require("./routes/expenseRouter"))
 
// error handling
// app.all("/*", (req, res, next)=>{
//     next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404))
// })  // THIS WAS OLD WAY OF HANDLING 404 ERRORS NOW REPLACED WITH THE BELOW CODE NODE22 NEW VERSION NOT SUPPORT *
app.use((req, res, next) => {
    next(new ErrorHandler(`Requested URL Not Found ${req.originalUrl}`, 404));
});

app.use(generateErrors)



app.listen(process?.env?.PORT, console.log(`Server is running on port ${process?.env?.PORT}`))