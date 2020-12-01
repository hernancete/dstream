const uuid = require('uuid');
const { AddTodoInput } = require('../schema/input/addTodoInput');
const { storeTodo } = require('../service/todosRepository');

async function addTodoDomain(commandPayload, commandMeta) {
  const todo = {
    todo_id: uuid.v4(),
    done: false,
    ...commandPayload,
  };
  new AddTodoInput(todo, commandMeta);

  await storeTodo(todo);

  return { body: todo };
}

module.exports = { addTodoDomain };
