const uuid = require('uuid');
const { AddTodoInput } = require('../schema/input/addTodoInput');
const { storeTodo } = require('../service/todosRepository');

async function addTodoDomain(commandPayload, commandMeta) {
  const todo = {
    todo_id: uuid.v4(),
    done: false,
    ...commandPayload,
  };
  const todoToAdd = new AddTodoInput(todo, commandMeta).get();

  await storeTodo(todoToAdd);

  return { body: todoToAdd };
}

module.exports = { addTodoDomain };
