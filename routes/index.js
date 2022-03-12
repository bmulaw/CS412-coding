const express = require('express');
const router = express.Router();

router.get('/get-customer', (req, res, next) => {
  res.render('index', { title: 'Hi, welcome ', name: 'Customer', nameLength: 8 });
  return {'name' : 'Customer', 'nameLength': 8}
});

router.post('/get-customer-name', (req, res, next) => {
  res.render('index', { title: 'Hi, welcome ', name: req.body.name , nameLength: req.body.name.length });
  return { 'name' : req.body.name, 'nameLength': req.body.name.length }
});

router.get('/name/:username', (req, res, next) => {
  const username = req.params.username;
  const nameLength = username.length;
  res.render('index', { title: 'Hi, welcome ', name: username , nameLength: nameLength });
  return { 'name' : username, 'nameLength': nameLength }
})

module.exports = router;
