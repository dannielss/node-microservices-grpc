const load = require("../util/loader");

const AtlasClient = load({
  serviceName: "UserService",
  address: "0.0.0.0:8082",
  filename: "atlas",
  package: "atlasPackage"
});

module.exports = AtlasClient;
