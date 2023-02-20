require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(__dirname + '/public/'));

app.use('/', require('./routes/user'));

let port = 3000 || process.env.PORT;
app.listen(port, (req, res) => {
    console.log(`The server is running on the port ${port}`);
})