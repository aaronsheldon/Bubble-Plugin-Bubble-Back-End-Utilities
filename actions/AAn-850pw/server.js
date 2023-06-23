function(properties, context) {

    // Clean
    if (properties.dictionary == null) { return { random: "" }; }
    if (properties.samples == null) { return { random: "" }; }
    if (properties.samples < 1) { return { random: "" }; }
    if (properties.dictionary.length < 2) { return { random: properties.dictionary.repeat(properties.samples) }; }
    
    // Load
    const { randomInt } = require("crypto");
    const d = properties.dictionary;
    const m = properties.samples;
    const n = d.length - 1;

	// Send
	return { random: Array(m).fill().reduce((l, r) => l + d[randomInt(0, n)], "") };
}