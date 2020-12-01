const { InputValidation } = require('nbased/schema/inputValidation');

class TodoChangedInput extends InputValidation {
  constructor(payload, meta) {
    super({
      type: 'API.ADD_TODO',
      specversion: 'v1.0.0',
      source: meta.source,
      payload: payload,
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

module.exports = { TodoChangedInput };
