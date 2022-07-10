const Order = require('./models/Order');

module.exports =  {
  async createOrder(req, res) {
    const { order, price, user_id } = req.request;

    const response = await Order.create({
      price,
      order,
      user_id
    });

    const dishes = response.order.map(order => {
      return {
        dish: order.dish
      }
    });

    return res(null, {
      order: dishes,
      price: response.price,
      status: 'ok',
      user_id
    });
  },
};
