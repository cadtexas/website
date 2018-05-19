var express = require('express');
var router = express.Router();

var officers = [
  {
    name: 'Carl Karouta',
    title: 'President',
    image: 'images/officers/carl-karouta.jpg'
  },
  {
    name: 'Alex Collins',
    title: 'VP Internal',
    image: 'images/officers/alex-collins.png'
  },
  {
    name: 'Dan Tran',
    title: 'VP External',
    image: 'images/officers/dan-tran.png'
  },
  {
    name: 'Miguel Obregon',
    title: 'VP Special Events',
    image: 'images/officers/miguel-obregon.jpg'
  },
  {
    name: 'Karina Galvan',
    title: 'Media Director',
    image: 'images/officers/karina-galvan.jpg'
  },
  {
    name: 'David Garza',
    title: 'Instructor',
    image: 'images/officers/david-garza.jpg'
  },
  {
    name: 'Juan Trejo',
    title: 'Instructor',
    image: 'images/officers/juan-trejo.jpg'
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UT CAD' });
});

module.exports = router;
