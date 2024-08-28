const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Vendor Home Page");
})

router.get('/contact', (req, res) => {
    res.json({name: '', phone: '', address: ''});
});

router.post('/info', (req, res) => {
    console.log(req.body);
    res.json("Ok");
});

module.exports = router;