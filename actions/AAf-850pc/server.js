function(properties, context) {
	return { bytes: [...Buffer.from(properties.contents, "utf-8").values()] };
}