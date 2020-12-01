const { putItem } = require('nbased/service/storage/dynamo');

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

module.exports = { storeTodo };
