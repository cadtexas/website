var express = require('express');
var router = express.Router();

var officers = [
  {
    name: 'Kishan Ramchandran',
    title: 'President',
    image: 'http://via.placeholder.com/225x225?text=Kishan'
  },
  {
    name: 'Alvin Nguyen',
    title: 'Vice President',
    image: 'http://via.placeholder.com/225x225?text=Alvin'
  },
  {
    name: 'Carl Karouta',
    title: 'Corporate Director',
    image: 'http://via.placeholder.com/225x225?text=Carl'
  },
  {
    name: 'Alex Collins',
    title: 'Events Director',
    image: 'http://via.placeholder.com/225x225?text=Alex'
  },
  {
    name: 'Karina Galvan',
    title: 'Media Director',
    image: 'http://via.placeholder.com/225x225?text=Karina'
  },
  {
    name: 'Steven Kornajcik',
    title: 'Membership Director',
    image: 'http://via.placeholder.com/225x225?text=Steven'
  },
  {
    name: 'Dan Tran',
    title: 'Treasurer',
    image: 'http://via.placeholder.com/225x225?text=Dan'
  },
  {
    name: 'Shaunik Bhatte',
    title: 'SEC Representative',
    image: 'http://via.placeholder.com/225x225?text=Shaunik'
  },
  {
    name: 'Aaron Comen',
    title: 'Instructor',
    image: 'http://via.placeholder.com/225x225?text=Aaron'
  },
  {
    name: 'David Garza',
    title: 'Instructor',
    image: 'http://via.placeholder.com/225x225?text=David'
  },
  {
    name: 'Eduardo Priego',
    title: 'Instructor',
    image: 'http://via.placeholder.com/225x225?text=Eduardo'
  },
  {
    name: 'Juan Trejo',
    title: 'Instructor',
    image: 'http://via.placeholder.com/225x225?text=Juan'
  },
  {
    name: 'Miguel Obregon',
    title: 'Instructor',
    image: 'http://via.placeholder.com/225x225?text=Miguel'
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
