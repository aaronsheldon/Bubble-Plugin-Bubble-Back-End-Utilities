function(properties, context) {
    const { randomUUID } = require('crypto');
	return { uuid: randomUUID() };
}