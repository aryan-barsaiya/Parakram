const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.ejs');
})
router.get('/home', (req, res) => {
    res.render('home.ejs');
})
router.get('/sponsors', (req, res) => {
    res.render('sponsors.ejs');
})
router.get('/events', (req, res) => {
    res.render('events.ejs');
})
module.exports = router;