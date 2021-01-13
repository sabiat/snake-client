const net = require('net');
const stdin = process.stdin;

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  // on receiving data from server, it will print it to our terminal
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;


}

console.log('Connecting ...');
connect();