const express = require('express')
const app = express()
const router = express.Router();

// Router-level Middleware
router.use((req, res, next) => {
    console.log("work with blog request");
    next();
})

router.use((req, res, next) => {
    console.log('work with blog reqest again');
    next();
})

router.get('/', (req, res) => {
  res.send('Hello Blog!')
})


module.exports = router;