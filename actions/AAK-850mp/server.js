function(properties, context) {
    
    // Default JSON payload
    var payload = {
        name: properties.filename,
        contents: properties.contents
    }

    // File is private and attach user specified
    if (properties.private && properties.attachto != null) {
       payload.private = true;
       payload.attach_to = properties.attachto.get("_id");
    }

    // File is private default to current user
    else if (properties.private) {
        payload.private = true;
        payload.attach_to = context.currentUser.get("_id");
    }

    // Incantation to upload file
    var postoptions = {
        uri: properties.homeurl + "fileupload",
        method: "POST",
        json: payload
    };
    
    // Send
    return { savedfile: context.request(postoptions).body };
}