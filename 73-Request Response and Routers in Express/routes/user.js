const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User Home Page');
})

router.get('/contact', (req, res) => {
    res.json({name: "Black", phone: "232323232", address: "lkadfkafda f akdfsd dfk"});
})

module.exports = router;