async function(properties, context) {
    
    // Ingest
    const options = {
        method: "GET",
        headers: { "Accept": "application/octet-stream" }
    };

    // Digest
    const response = fetch(properties.fileurl, options)
    .then((response) => { return response.arrayBuffer(); })
    .then((response) => { return { contents: Buffer.from(response).toString("base64") }; });

    // Excrete
    return response;
}