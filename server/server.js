const path = require('path');
const morgan = require('morgan');
const express = require('express');
const fs = require('fs');

const formPath = path.join(__dirname, './contact-form.json')

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/contact-form', (req, res) => {
    let data = fs.readFileSync(formPath);
    let info = JSON.parse(data);
    res.send(info);
})

app.post('/contact-form', (req, res) => {
    let data = fs.readFileSync(formPath);
    let info = JSON.parse(data);
    info.push(req.body);
    fs.writeFileSync(formPath, JSON.stringify(info));
    res.redirect('/');
});

app.listen(3000, () => console.log('Server running on port 3000!'));