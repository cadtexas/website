var express = require('express');
var router = express.Router();

var officers = [
  {
    name: 'Carl Karouta',
    title: 'President',
    image: 'images/officers/carl-karouta.jpg',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus erat quis."
  },
  {
    name: 'Alex Collins',
    title: 'VP Internal',
    image: 'images/officers/alex-collins.png',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus erat quis."
  },
  {
    name: 'Dan Tran',
    title: 'VP External',
    image: 'images/officers/dan-tran.png',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus erat quis."
  },
  {
    name: 'Miguel Obregon',
    title: 'VP Special Events',
    image: 'images/officers/miguel-obregon.jpg',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus erat quis."
  },
  {
    name: 'Karina Galvan',
    title: 'Media Director',
    image: 'images/officers/karina-galvan.jpg',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus erat quis."
  },
  {
    name: 'David Garza',
    title: 'Instructor',
    image: 'images/officers/david-garza.jpg',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus erat quis."
  },
  {
    name: 'Juan Trejo',
    title: 'Instructor',
    image: 'images/officers/juan-trejo.jpg',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus erat quis."
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UT CAD' });
});

/* GET officers page */
router.get('/officers', function(req, res, next) {
  res.render('officers', { title: 'CAD - Officers', 'officers': officers });
});

module.exports = router;
