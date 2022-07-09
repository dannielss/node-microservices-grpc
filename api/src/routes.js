const { Router } = require('express');
const UserController = require('./controllers/UserController');

const router = Router();

router.post('/users/new', UserController.store);
router.get('/users/:id', UserController.index);
router.get('/users', UserController.show);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.remove);
router.post('/auth', UserController.authenticate);

module.exports = router;
