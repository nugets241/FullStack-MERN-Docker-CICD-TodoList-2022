const express = require('express');

const emojis = require('./emojis');
const task = require('./task');
const tasks = require('./tasks');

const router = express.Router();

router.use('/emojis', emojis);
router.use('/task', task);
router.use('/tasks', tasks);

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});



module.exports = router;
