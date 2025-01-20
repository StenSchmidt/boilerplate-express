require('dotenv').config()
let express = require('express');
let app = express();


app.get('/name', function(req,res) {
    let firstName = req.query.first;
    let lastName = req.quary.last;
    let fullName = (firstName + " " + lastName);
    res.json({"name": fullName});
});


// app.get('/:word/echo', function(req, res) {
//     res.send({echo: req.params.word});
// });

// app.get('/now', function(req, res, next) {
//     req.time = new Date().toString();
//     next();
// }, function(req, res) {
//     res.send({time: req.time});
// });

// app.use(function(req, res, next) {
//     console.log(req.method + " " + req.path + " - " + req.ip);
//     next();
// })


//app.get("/", function(req, res) {
    // let absolutePath = __dirname + '/views/index.html';
    // res.sendFile(absolutePath);
// });
//app.use("/public", express.static(__dirname + "/public"));

// app.get("/json", function(req, res) {
//     if (process.env.MESSAGE_STYLE=="uppercase") {
//         res.json({"message": "HELLO JSON"});
//     } else {
//         res.json({"message": "Hello json"});
//     }
// });



 module.exports = app;
