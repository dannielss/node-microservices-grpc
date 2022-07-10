const OrderClient = require('../services/hermes');

class OrderController {
  async store(req, res) {
    const { order, price, user_id } = req.body;

    const response = await OrderClient.createOrder({ order, price, user_id });

    return res.json(response);
  }
}

module.exports = new OrderController();
