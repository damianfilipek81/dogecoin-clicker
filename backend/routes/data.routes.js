const express = require('express');
const Data = require('../models/data.model');

const router = express.Router();

router.get('/data/myData', async (req, res) => {
  try {
    const result = await Data.find({email: req.user._json.email}).sort({ _id: -1 }).limit(1);

    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/data/add', async (req, res) => {
  try {
    const data = {
      data: req.body.data,
      email: req.body.data.user.email
    }
    const newData = new Data(data);

    await newData.save();
    res.json(newData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;