const express = require('express');
let app = express();

app.get("/", (req,res) => {
   res.send("It works!");
});

app.listen(3000);
console.log("Server Listening on port 3000");

