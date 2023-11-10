async function(properties, context) {
	return { string: Buffer.from(properties.contents, "base64").toString("utf-8") };
}