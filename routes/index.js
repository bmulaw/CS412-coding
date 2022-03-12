const express = require('express');
const router = express.Router();


router.post('/test', (req, res, next) => {
  console.log(req)
  res.render('index', { title: 'Hey there, ' + req.body.name });
});

module.exports = router;
