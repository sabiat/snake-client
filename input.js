/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (input) => {
    handleUserInput(input);
  });
  return stdin;
}

// will check for Ctrl + c and exit game
const handleUserInput = function(input) {
  if (input === '\u0003') {
    process.exit();
  }
}

module.exports = {setupInput};