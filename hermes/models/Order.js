const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user_id: mongoose.ObjectId,
  order: [
    {
      dish: String,
    }
  ],
  price: Number
});

module.exports = mongoose.model("Order", OrderSchema);
