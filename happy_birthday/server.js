
const express = require("express")
const app = express()
app.use(express.static("root"))
app.listen(81,()=>{
    console.log("服务开启在81端口")
})