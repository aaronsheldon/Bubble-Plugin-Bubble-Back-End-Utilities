function(properties, context) {
	return { bytes: [...Buffer.from(properties.contents, "base64").values()] };
}