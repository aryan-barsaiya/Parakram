const express = require("express");
const router = express.Router();

router.get('/home', (req, res) => {
    res.render('home.ejs');
})
router.get('/bp', (req, res) => {
    res.render('boilerplate.ejs');
})

router.get('/gallery', (req, res) => {
    res.send('gallery page');
})

module.exports = router;