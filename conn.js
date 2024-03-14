const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/foodDetail")
.then(()=>console.log("connected"))
.catch(()=>console.log("not connceted"))
module.exports=mongoose