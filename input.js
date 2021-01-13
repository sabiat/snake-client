/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

//Stores the active TCP connection object.
const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, HELLO_KEY, HOW_ARE_YOU_KEY, I_WILL_WIN_KEY, EXIT_KEY} = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (input) => {
    handleUserInput(input);
  });
  return stdin;
}

// will check for Ctrl + c and exit game and handle w,a,s,d keys
const handleUserInput = function(input) {
  if (input === EXIT_KEY) {
    process.exit();
  }
  if (input === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (input === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (input === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (input === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (input === HELLO_KEY) {
    connection.write("Say: hello ☺️");
  }
  if (input === HOW_ARE_YOU_KEY) {
    connection.write("Say: how are you");
  }
  if (input === I_WILL_WIN_KEY) {
    connection.write("Say: I will win!!!");
  }
}

module.exports = {setupInput};