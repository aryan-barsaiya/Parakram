const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.ejs');
})
router.get('/home', (req, res) => {
    res.render('home.ejs');
})

router.get('/gallery', (req, res) => {
    res.send('gallery page');
})

router.get('/sponsor', (req, res) => {
    res.render('sponsor.ejs');
})

module.exports = router;