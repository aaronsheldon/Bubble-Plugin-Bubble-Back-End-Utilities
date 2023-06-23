function(properties, context) {
	const pathengine = require('jsonpath');
	return {
        filteredjson: pathengine.query(
            JSON.parse(properties.sourcejson),
            properties.pathfilter
        ).map(r => typeof r == "object" ? JSON.stringify(r) : String(r))
    };
}