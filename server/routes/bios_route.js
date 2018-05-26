const express = require('express');
const router = express.Router();

const BiosController = require('../controllers/bios_controller');

// get Bios
router.get('/getbios', BiosController.getBios);
router.get('/getPictures/:id', BiosController.getPictures);

module.exports = router;