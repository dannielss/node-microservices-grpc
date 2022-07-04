const path = require("path");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const { promisify } = require('util');

module.exports = function load({
  serviceName, 
  filename, 
  address,
  package,
  credentials = grpc.credentials.createInsecure()
}) {
  const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, "..", "proto", `${filename}.proto`),
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    }
  );

  const grpcObj = grpc.loadPackageDefinition(packageDefinition);

  const client = new grpcObj[package][serviceName](address, credentials);

  // Promisify all client methods
  Object.entries(client.__proto__).map(([prop, value]) => {
    if (value.originalName !== undefined) {
      client[prop] = promisify(value);
    }
  });

  return client;
};
