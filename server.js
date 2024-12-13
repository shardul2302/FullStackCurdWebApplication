const express = require("express");
app=express()
const cors = require("cors");
const mysql2 = require("mysql2");
const port = process.env.PORT || 3000;





// Start server

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    "extended": false
}))

const controller=require('./controller/controller')
app.use(controller)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
