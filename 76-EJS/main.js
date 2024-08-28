const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let options = [1, 2, 3, 4, 5];
  res.render('index', {brand: 'Multi-Exports', options});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})