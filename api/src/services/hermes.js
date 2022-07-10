const load = require("../util/loader");

const OrderService = load({
  serviceName: "OrderService",
  address: "hermes:8083",
  filename: "hermes",
  package: "hermesPackage"
});

module.exports = OrderService;
