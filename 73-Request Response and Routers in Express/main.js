const express = require('express')
const formData = require('express-form-data')
const user = require('./routes/user')
const vendor = require('./routes/vendor')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(formData.parse());
// app.use(formData.union());
// app.use(formData.format());
app.use('/user', user);
app.use('/vendor', vendor);

app.get('/', (req, res) => {
  res.sendFile('/templates/index.html', { root: __dirname });
  // res.send("Hello to home");
})
  .post('/form', (req, res) => {
    console.log(req.body);
    console.log("It is a post request.");
    res.send("Post Successfull!");
  })
  .put('/update', (req, res) => {
    console.log(req.body);
    res.json({ name: 'Black', age: 22 });
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})