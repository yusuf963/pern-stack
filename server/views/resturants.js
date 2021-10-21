const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('response all data');
});

router.post('/', (req, res) => {
  res.send('hi, you created  new record');
  console.log(req.body.number);
});

router.get('/:id', (req, res) => {
  res.send('get single record');
});

router.patch('/:id', (req, res) => {
  res.send('update single record');
});

router.delete('/:id', (req, res) => {
  res.send('delete single record');
});

module.exports = router;
