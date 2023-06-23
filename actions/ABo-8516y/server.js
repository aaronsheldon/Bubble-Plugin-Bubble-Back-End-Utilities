function(properties, context) {
	return { 
        allmatches: Array.from(
            properties.searchstring.matchall(properties.regularexpression),
            item => item[0]
        ) 
    };
}