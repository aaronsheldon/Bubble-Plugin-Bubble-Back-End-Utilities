function(properties, context) {
	return { contents: Buffer.from(properties.string, "utf-8").toString("base64") };
}