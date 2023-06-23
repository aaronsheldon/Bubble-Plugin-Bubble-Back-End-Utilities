function(properties, context) {
    
    // Clean
    if (properties.lower == null) { return { samples: [] }; }
    if (properties.upper == null) { return { samples: [] }; }
    if (properties.samples == null) { return { samples: [] }; }
    if (properties.samples < 1) { return { samples: [] }; }
    if (properties.lower > properties.upper) { return { samples: [] }; }
    if (properties.lower == properties.upper) { return { samples: Array(properties.samples).fill(properties.lower) }; }
    
    // Load
    const { randomInt } = require("crypto");
    const l = properties.lower;
    const u = properties.upper;
    const m = properties.samples;
    const s = Array(m).fill();
    s.forEach((e, i, es) => es[i] = randomInt(l, u));

	// Send
	return { samples: s };
}