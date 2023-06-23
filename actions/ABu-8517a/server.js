function(properties, context) {
	return {
        lines: properties.text ? properties
        	.text
        	.split(/\r?\n/)
        	.map((l) => { return 1 + (properties.characters ? Math.floor(l.length / properties.characters) : 0); })
        	.reduce((a, v) => { return a + v; }, 0) : 0
	};
}