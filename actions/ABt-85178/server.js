function(properties, context) {
    return { number: properties.number.toString().padStart(properties.leadingzeros, "0") };
}