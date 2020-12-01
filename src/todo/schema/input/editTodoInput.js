const { InputValidation } = require('nbased/schema/inputValidation');

class EditTodoInput extends InputValidation {
  constructor(payload, meta) {
    super({
      type: 'API.EDIT_TODO',
      specversion: 'v1.0.0',
      source: meta.source,
      payload: payload,
      schema: {
        strict: false,
        todo_id: String,
        name: { type: String, required: false },
        description: { type: String, required: false },
        done: { type: Boolean, required: false },
      },
    });
  }
}

module.exports = { EditTodoInput };
