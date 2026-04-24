const express = require("express");
const app = express();

app.get("/about", (req, res)=>{
    res.send("About Us")
})

app.get("/user", (req, res)=>{
    console.log(req.query);
    res.send("Hello from Dashbboard.. " + JSON.stringify(req.query))
})

app.get("/user2/:id/:name", (req, res, next)=>{
    console.log(req.params);
    //res.send("Hello from Dashbboard.. " + JSON.stringify(req.params))
    next();
}
, (req, res, next)=>{
    console.log(req.params);
    res.send("Hello from Dashbboard 2 .. " + JSON.stringify(req.params))
    
}
)

app.get("/", (req, res)=>{
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