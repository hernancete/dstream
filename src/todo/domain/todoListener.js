
async function todoListenerDomain(eventPayload, eventMeta, rawEvent) {
  console.log('eventPayload', eventPayload);
  console.log('eventMeta', eventMeta);
  console.log('rawEvent', rawEvent);
  return { body: 'Ok' };
}

module.exports = { todoListenerDomain };
