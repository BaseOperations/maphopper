const awsServerlessExpress = require("aws-serverless-express");
const proxy = require('./proxy');

const server = awsServerlessExpress.createServer(proxy);

exports.handler = (event, context, callback) => {
  awsServerlessExpress.proxy(server, event, context);
};
