const express = require('express');
const router = express.Router();
const { getContacts, addContact } = require('../controllers/contactController');

router.get('/', getContacts);
router.post('/', addContact);

module.exports = router;
