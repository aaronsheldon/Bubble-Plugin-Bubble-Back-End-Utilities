async function(properties, context) {

	// Clean
    if (properties.content == null) { return { content: "" }; }
    if (properties.content.length < 2) { return { content: "" }; }
    if (properties.delimiter == null) { return { content: properties.content }; }
    if (properties.delimiter.length < 1) { return { content: properties.content }; }
    if (properties.size == null) { return { content: properties.content }; }
    if (properties.size < 1) { return { content: properties.content }; }
    
    // Load
    const c = properties.content;
    const d = properties.delimiter;
    const s = properties.size;
    const n = properties.content.length - 1;
    const m = properties.size - 1;
    
    // Send
    return {
    	content: c.split("").reduce((l, r, i) => l + r + (i % s == m && i < n ? d : ""), "")
    };
}