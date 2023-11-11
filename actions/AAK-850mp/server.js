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
    const file = response
    .then((response) => { return response.ok ? response.json() : ""; })
    .then((response) => { return response ? protocol + response : ""; });
	const status = response
    .then(
        (response) => {
        	return {
                code: response.status,
            	text: response.statusText
            }
        }
    );

    // Excrete
    return Promise
    .all([status, file])
    .then(
    	([status, file]) => {
        	return {
            	savedfile: file,
                code: status.code,
                status: status.text
            };
        }
    );
}