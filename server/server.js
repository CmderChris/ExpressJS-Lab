const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/contact-form', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('Thank you for submitting your contact form.');
});

// app.use((req, res, next) => {
//     fs.appendFileSync('log.txt', `${req.url}/n`);
//     next();
    // console.log(req.url)
    // next();
// })

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000, () => console.log('Server running on port 3000!'));