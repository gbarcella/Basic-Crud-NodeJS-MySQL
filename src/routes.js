const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');

router.get('/users', UserController.findAll);
router.get('/user/:id', UserController.findById);
router.post('/user', UserController.insert);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);

module.exports = router;