const { putItem, updateItem } = require('nbased/service/storage/dynamo');

const TODOS_TABLE = process.env.TODOS_TABLE || 'todosTable';

async function storeTodo(todo) {
  const params = {
    TableName: TODOS_TABLE,
    Item: todo,
    ReturnValues: 'NONE',
    ConditionExpression: 'attribute_not_exists(#pk)',
    ExpressionAttributeNames: {
      '#pk': 'todo_id',
    },
  };
  const { Attributes } = await putItem(params);
  return Attributes;
}

async function updateTodo(todo) {
  const Key = { todo_id: todo.todo_id };
  delete todo.todo_id;
  const updateExpressions = [];
  const ExpressionAttributeNames= {};
  const ExpressionAttributeValues= {};

  Object.keys(todo).forEach(k => {
    updateExpressions.push(`#${k}=:${k}`);
    ExpressionAttributeNames[`#${k}`] = k;
    ExpressionAttributeValues[`:${k}`] = todo[k];
  });
  if (!updateExpressions.length) {
    throw new Error('Nothing to update');
  }
  const UpdateExpression = 'SET ' + updateExpressions.join(', ');

  const params = {
    TableName: TODOS_TABLE,
    Key,
    UpdateExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
    ReturnValues: 'ALL_NEW',
  };
  const { Attributes } = await updateItem(params);
  return Attributes;
}

module.exports = {
  storeTodo,
  updateTodo,
};
