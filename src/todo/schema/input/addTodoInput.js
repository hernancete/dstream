const { InputValidation } = require('nbased/schema/inputValidation');

class AddTodoInput extends InputValidation {
  constructor(payload, meta) {
    super({
      type: 'API.ADD_TODO',
      specversion: 'v1.0.0',
      source: meta.source,
      payload: payload,
      schema: {
        strict: false,
        name: String,
        description: { type: String, required: false },
        done: Boolean,
      },
    });
  }
}

module.exports = { AddTodoInput };
