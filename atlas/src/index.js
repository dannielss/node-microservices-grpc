const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const implementation = require('./implementation');

const PORT = 8082;

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'proto', 'atlas.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
);
const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(proto.atlasPackage.UserService.service, implementation);

server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) return console.log(err);
    console.log(`Your server as started on port ${port}`);
    server.start();
  }
);

