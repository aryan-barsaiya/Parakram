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
router.get('/gallery', (req, res) => {
    res.render('gallery/album.ejs');
})
router.get('/athletics', (req, res) => {
    res.render('gallery/athletics.ejs');
})
router.get('/badminton', (req, res) => {
    res.render('gallery/badminton.ejs');
})
router.get('/basketball', (req, res) => {
    res.render('gallery/basketball.ejs');
})
router.get('/cricket', (req, res) => {
    res.render('gallery/cricket.ejs');
})
router.get('/football', (req, res) => {
    res.render('gallery/football.ejs');
})
router.get('/volleyball', (req, res) => {
    res.render('gallery/volleyball.ejs');
})

router.get('/contact', (req, res) => {
    res.render('contact.ejs');
})
module.exports = router;