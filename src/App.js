const express = require("express");
const app = express();

app.use("/about", (req, res)=>{
    res.send("About Us")
})

app.use("/", (req, res)=>{
    res.send("Hello from Dashbboard.....")
})

// app.use("/aboutt", (req, res) => {
//     res.send("About Us T");
// });

// app.use("/", (req, res) => {
//     res.send("Hello from Dashboard");
// });

app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000...");
});