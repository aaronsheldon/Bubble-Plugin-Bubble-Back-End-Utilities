async function(properties, context) {
	return { contents: Buffer.from(properties.bytes.get(0, properties.bytes.length())).toString("base64") };
}