async function(properties, context) {
	const { createHmac } = require("crypto");
    
    // Ingest
    if (!properties.content) { return { digest: "" }; }
    if (!properties.key) { return { digest: "" }; }
    if (!properties.algorithm) { return { digest: "" }; }
    if (!properties.encoding) { return { digest: "" }; }
    
    // Digest
    const client = createHmac(properties.algorithm, properties.key);
    client.update(properties.content);
    
    // Excrete
	return { digest: client.digest(properties.encoding) };
}