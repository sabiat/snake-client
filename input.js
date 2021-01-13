/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

//Stores the active TCP connection object.
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
  if (input === '\u0003') {
    process.exit();
  }
  if (input === '\u0077') {
    connection.write("Move: up");
  }
  if (input === '\u0061') {
    connection.write("Move: left");
  }
  if (input === '\u0073') {
    connection.write("Move: down");
  }
  if (input === '\u0064') {
    connection.write("Move: right");
  }
  if (input === '\u006B') {
    connection.write("Say: hello ☺️");
  }
  if (input === '\u006A') {
    connection.write("Say: how are you");
  }
  if (input === '\u006C') {
    connection.write("Say: I will win!!!");
  }
}



module.exports = {setupInput};