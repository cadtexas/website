var express = require('express');
var router = express.Router();

var officers = [
  {
    name: 'Kishan Ramchandran',
    title: 'President',
    image: 'images/officers/kishan-ramchandran.jpg'
  },
  {
    name: 'Alvin Nguyen',
    title: 'Vice President',
    image: 'images/officers/alvin-nguyen.jpg'
  },
  {
    name: 'Carl Karouta',
    title: 'Corporate Director',
    image: 'images/officers/carl-karouta.jpg'
  },
  {
    name: 'Alex Collins',
    title: 'Events Director',
    image: 'images/officers/alex-collins.png'
  },
  {
    name: 'Karina Galvan',
    title: 'Media Director',
    image: 'images/officers/karina-galvan.jpg'
  },
  {
    name: 'Steven Kornajcik',
    title: 'Membership Director',
    image: 'images/officers/steven-kornajcik.png'
  },
  {
    name: 'Dan Tran',
    title: 'Treasurer',
    image: 'images/officers/dan-tran.png'
  },
  {
    name: 'Shaunik Bhatte',
    title: 'SEC Representative',
    image: 'images/officers/shaunik-bhatte.png'
  },
  {
    name: 'Aaron Comen',
    title: 'Instructor',
    image: 'images/officers/aaron-comen.png'
  },
  {
    name: 'David Garza',
    title: 'Instructor',
    image: 'images/officers/david-garza.jpg'
  },
  {
    name: 'Eduardo Priego',
    title: 'Instructor',
    image: 'images/officers/eduardo-priego.png'
  },
  {
    name: 'Juan Trejo',
    title: 'Instructor',
    image: 'images/officers/juan-trejo.jpg'
  },
  {
    name: 'Miguel Obregon',
    title: 'Instructor',
    image: 'images/officers/miguel-obregon.jpg'
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UT CAD' });
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'CAD - About', 'officers': officers });
});

/* GET get involved  page */
router.get('/involved', function(req, res, next) {
  res.render('involved', { title: 'CAD - Get Involved'});
});

module.exports = router;
