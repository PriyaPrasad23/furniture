const express = require("express");
const adminRouter = require("./routes/admin")
var path = require('path');

const app = express();
   
app.use("/admin", adminRouter)
app.use('/static', express.static(path.resolve('public')))

app.listen(3000, function(){
    console.log("server is up 3000");
});