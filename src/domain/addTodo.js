const { AddTodoInput } = require('../schema/input/addTodoInput');

async function addTodoDomain(commandPayload, commandMeta) {
  const todo = {
    done: false,
    ...commandPayload,
  };
  new AddTodoInput(todo, commandMeta);

  console.log('Store this new Todo into todos table');

  return { body: todo };
}

module.exports = { addTodoDomain };
