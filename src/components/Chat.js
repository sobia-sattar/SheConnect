// src/Chat.js
import React, { useEffect } from 'react';
import socket from './socket';

function Chat() {

  useEffect(() => {
    socket.on('receive_message', (message) => {
      console.log('New message:', message);
    });

    return () => {
      socket.off('receive_message');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('send_message', { username: 'Masi', text: 'Hello from Chat component!' });
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default Chat;
