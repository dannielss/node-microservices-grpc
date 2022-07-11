const HermesClient = require('../services/hermes');

class OrderController {
  async index(req, res) {
    const { id } = req.params;

    const response = await HermesClient.getOrderById({ _id: id });

    if(response.error) {
      return res.json({
        error: response.error,
        status: response.status
      });
    }

    return res.json({
      _id: response._id,
      order: response.order,
      user_id: response.user_id,
      price: response.price,
      status: response.status
    });
  }

  async store(req, res) {
    const { order, price, user_id } = req.body;

    const response = await HermesClient.createOrder({ order, price, user_id });

    return res.json(response);
  }
}

module.exports = new OrderController();
