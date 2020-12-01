const { EditTodoInput } = require('../schema/input/editTodoInput');
const { updateTodo } = require('../service/todosRepository');

async function editTodoDomain(commandPayload, commandMeta) {
  const todo = new EditTodoInput(commandPayload, commandMeta).get();

  const updatedTodo = await updateTodo(todo);

  return { body: updatedTodo };
}

module.exports = { editTodoDomain };
