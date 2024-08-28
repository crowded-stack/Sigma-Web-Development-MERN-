const express = require('express')
const blog = require('./routes/blog');
const app = express()
const port = 3000

// Middleware
// Built-in Middleware
app.use(express.static('public'));
app.use('/blog', blog);

// Application level Middleware
app.use((req, res, next) => {
    console.log("work with request");
    next();
})

app.use((req, res, next) => {
    console.log('work with reqest again');
    next();
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})