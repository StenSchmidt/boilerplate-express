let express = require('express');
let app = express();


//app.get("/", function(req, res) {
    // let absolutePath = __dirname + '/views/index.html';
    // res.sendFile(absolutePath);
// });
app.use("/public", express.static(__dirname + "/public"));
































 module.exports = app;
