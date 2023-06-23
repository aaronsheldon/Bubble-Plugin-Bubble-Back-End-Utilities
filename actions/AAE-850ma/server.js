function(properties, context) {
    
    // Incantation to request content
    var getoptions = {
  		uri: properties.fileurl,
  		method: "GET",
  		encoding: null,
  		headers: { "Accept": "application/octet-stream" }
	};
    
    // Store the bytes
    var filebytes = context.request(getoptions).body;

	// Send
    return { contents: Buffer.from(filebytes).toString("base64") };
}