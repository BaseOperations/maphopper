const awsServerlessExpress = require("aws-serverless-express");
const server = require('./server');

exports.handler = (event, context, callback) => {
  awsServerlessExpress.proxy(server, event, context);
};
