const load = require("../util/loader");

const AtlasClient = load({
  serviceName: "UserService",
  address: "atlas:8082",
  filename: "atlas",
  package: "atlasPackage"
});

module.exports = AtlasClient;
