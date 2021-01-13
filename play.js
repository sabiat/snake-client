const { connect } = require('./client');
const { setupInput } = require('./input');


console.log('Connecting ...');
let output = connect();

//passing the connection object returned from connect to allow for messages to be sent to the server
setupInput(output);

