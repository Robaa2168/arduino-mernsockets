const express = require('express');
const { getStates, updateState } = require('../controllers/stateController');
const router = express.Router();

router.get('/states', getStates);
router.put('/states/:id', updateState);

module.exports = router;

