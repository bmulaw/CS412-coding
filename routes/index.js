let express = require('express');
let router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.body)
  res.render('index', { title: 'Country' });
});

router.post('/capital', (req, res, next) => {
  
  let url = `https://restcountries.com/v3.1/name/${req.body.country}`
  const requestOptions = {
    url: url,
    method: 'GET',
    json: {},
    qs: {
      offset: 20
    }
  };
  
  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      let capital = body[0].capital[0];
      res.render('index', { capital: `${req.body.country}'s capital is ${capital}`, country: req.body.country, title: 'Country'});
    } else {
      console.log(response.statusCode);
    }
  });
});


router.post('/population', (req, res, next) => {
  
  let url = `https://restcountries.com/v3.1/name/${req.body.country}`
  const requestOptions = {
    url: url,
    method: 'GET',
    json: {},
    qs: {
      offset: 20
    }
  };
  
  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      let population = body[0].population;
      population = population.toLocaleString("en-US");
      res.render('index', { population: `${req.body.country}'s population is ${population}`, country: req.body.country, title: 'Country'});
    } else {
      console.log(response.statusCode);
    }
  });
});


router.post('/flag', (req, res, next) => {
  
  let url = `https://restcountries.com/v3.1/name/${req.body.country}`
  const requestOptions = {
    url: url,
    method: 'GET',
    json: {},
    qs: {
      offset: 20
    }
  };  
  
  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
    } else if (response.statusCode === 200) {
      let flag = body[0].flag;
      res.render('index', { flag: `${req.body.country}'s flag is ${flag}`, country: req.body.country, title: 'Country'});
    } else {
      console.log(response.statusCode);
    }
  });
});

router.use(express.urlencoded({
  extended: true
}))

module.exports = router;
