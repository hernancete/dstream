const { batchEventMapper } = require('nbased/handler');
const inputMode = require('nbased/handler/input/batchEventStream');
const outputMode = require('nbased/handler/output/batchEventConfirmation');

const { todoListenerDomain } = require('../domain/todoListener');

module.exports.handler = async (events, context) => {
  return batchEventMapper({ events, context }, inputMode, todoListenerDomain, outputMode);
};
