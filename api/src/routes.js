const { Router } = require('express');
const UserController = require('./controllers/UserController');
const OrderController = require('./controllers/OrderController');
const authMiddleware = require('./middlewares/auth');

const router = Router();

router.post('/auth', UserController.authenticate);
router.post('/users/new', UserController.store);

router.use(authMiddleware);

router.get('/users/:id', UserController.index);
router.get('/users', UserController.show);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.remove);

router.post('/order/new', OrderController.store);

module.exports = router;
