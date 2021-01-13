const net = require('net');

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
  // on connection to server, will print message to us and we will send message to server which shows initials on screen
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ST");
  })
  // on receiving data from server, it will print it to our terminal
  // server will send message when it kicks us out for idling
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;

}
module.exports = {connect};

