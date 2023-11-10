async function(properties, context) {
	return { formattedjson: JSON.stringify(JSON.parse(properties.rawjson), null, properties.indentspaces) };
}