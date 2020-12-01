const { DownstreamEvent } = require('nbased/schema/downstreamEvent');

class TodoCompletedEvent extends DownstreamEvent {
  constructor(payload, meta) {
    super({
      type: 'NTRANSACTION.TRANSACTION_RECEIVED',
      specversion: 'v1.0.0',
      payload: payload,
      meta: meta,
      schema: {
        strict: false,
        todo_id: String,
        name: String,
        description: { type: String, required: false },
        done: Boolean,
      },
    });
  }
}

module.exports = { TodoCompletedEvent };
