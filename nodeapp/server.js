// var express = require('express');
// var app = express();

// app.use(express.static('public'));

// app.get('/', function (req, res) {
// res.send('Hello World');
// })

// var server = app.listen(8081, function () {

// var host = server.address().address
// var port = server.address().port
// console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)
// })

var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

//Get
// app.post('/process_post', function (req, res) {

//     // Chuan bi output trong dinh dang JSON
//     const response = {
//         first_name: req.query.first_name,
//         last_name: req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })

// Post
app.post('/process_post', function (req, res) {

    const response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})