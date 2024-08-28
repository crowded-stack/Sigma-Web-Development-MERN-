const express = require('express')
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello About!')
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.get('/home', (req, res) => {
    res.send('Hello Home!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

app.get('/blog/:slug/:second', (req, res) => {
    console.log(req.params, req.query);
    res.send(`${req.params}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})