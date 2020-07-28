let message = "Hi everyone";

function logMessage(message) {
    console.log(message);
}

// console.log(module);

module.exports.message = message;
module.exports.logMessage = logMessage;
