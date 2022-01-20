const express = require('express');
const router = express.Router();
const path = require('path');

// Get route for homepage

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Public/index.html'));
  });

// Get route for notes page

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Public/notes.html'));
  });

  module.exports = router;