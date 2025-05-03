// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // allow all origins (for testing only)
  }
});

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('send_message', (message) => {
    io.emit('receive_message', message); // broadcast message to everyone
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
