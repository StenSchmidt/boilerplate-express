require('dotenv').config()
let express = require('express');
let app = express();



//app.get("/", function(req, res) {
    // let absolutePath = __dirname + '/views/index.html';
    // res.sendFile(absolutePath);
// });
//app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE=="uppercase") {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    }
});






























 module.exports = app;
