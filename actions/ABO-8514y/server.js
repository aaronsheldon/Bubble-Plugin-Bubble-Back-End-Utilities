async function(properties, context) {
    
    // Clean
    const limit = Math.max(1, properties.limit || 1);
    
    // Send
	return { numbers: [...Array(limit).keys()].map(x => ++x) };
}