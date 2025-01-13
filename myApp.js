let express = require('express');
let app = express();


app.get("http://localhost:3000/", function(req, res) {
    res.send("Hello Express");
});

































 module.exports = app;
