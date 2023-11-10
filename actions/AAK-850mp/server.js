async function(properties, context) {
    
    // Ingest
    const url = properties.homeurl + "fileupload";
    const protocol = properties.private ? "" : "https:";
    const payload = {
        name: properties.filename,
        contents: properties.contents
    };

    // Private and assigned
    if (properties.private && properties.attachto) {
        payload.private = true;
        payload.attach_to = properties.attachto.id;
    }

    // Private and default
    else if (properties.private) {
        payload.private = true;
        payload.attach_to = context.currentUser.id;
    }

    // POST options
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(payload)
    };

    // Digest
    const response = fetch(url, options)
    .then((response) => { return response.json(); })
    .then((response) => { return { savedfile: protocol + response }; });

    // Excrete
    return response;
}