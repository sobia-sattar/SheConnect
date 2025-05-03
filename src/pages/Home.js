import React, { useEffect, useState } from "react";
import { FaUsers, FaBook, FaPhoneAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks
import { setUser, logoutUser } from '../actions'; // Redux actions
import { motion } from 'framer-motion'; // Framer Motion
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Recharts
import { io } from 'socket.io-client'; // Import Socket.io client
import "./Home.css";

// Initialize socket connection
const socket = io('http://localhost:5000'); // Replace with your backend URL

// Sample data for User Activity Chart
const data = [
  { name: 'Jan', users: 4000 },
  { name: 'Feb', users: 3000 },
  { name: 'Mar', users: 5000 },
  { name: 'Apr', users: 6000 },
  { name: 'May', users: 7000 },
  { name: 'Jun', users: 8000 },
];

// User Activity Chart component
const UserActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Access user from Redux
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Scroll animations
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);

    // Socket.io - receive messages
    socket.on('receive_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      socket.off('receive_message');
    };
  }, []);

  const handleLogin = () => {
    dispatch(setUser({ name: 'Jane Doe', email: 'jane@example.com' }));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      socket.emit('send_message', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="heading">Welcome to <span className="brand">SheConnect</span></h1>
        <p className="subheading">Empowering women with resources, mentorship, and safety. Join the community!</p>
      </div>

      {/* Show login status */}
      <div>
        {user ? (
          <div>
            <h2>Hello, {user.name}</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>

      {/* Feature Cards Section */}
      <section className="home-section">
        <h2 className="section-title">Explore Our Features</h2>
        <div className="feature-cards">
          <motion.div 
            className="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaUsers size={40} className="card-icon" />
            <h3 className="card-title">Anonymous Help Forum</h3>
            <p className="card-text">Ask questions and seek advice anonymously from mentors and peers on topics such as mental health, safety, and career challenges.</p>
            <a href="/forum" className="btn">Join the Forum</a>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaBook size={40} className="card-icon" />
            <h3 className="card-title">Resource Library</h3>
            <p className="card-text">Access articles, videos, and guides on critical topics like menstrual health, self-defense, scholarships, and career development.</p>
            <a href="/resources" className="btn">Browse Resources</a>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FaPhoneAlt size={40} className="card-icon" />
            <h3 className="card-title">Emergency Help</h3>
            <p className="card-text">Get quick access to emergency contacts and nearby support centers, ensuring your safety wherever you are.</p>
            <a href="/emergency" className="btn">Get Emergency Help</a>
          </motion.div>
        </div>
      </section>

      {/* User Activity Chart */}
      <section className="home-section">
        <h2 className="section-title">User Activity</h2>
        <UserActivityChart />
      </section>

      {/* Real-Time Chat Section */}
      <section className="home-section">
        <h2 className="section-title">Community Chat</h2>
        <div className="chat-box">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">{msg}</div>
            ))}
          </div>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </section>

      {/* Footer */}
      <div className="home-footer">
        <p className="footer-text">Empowering women through knowledge, support, and safety. Join SheConnect today!</p>
      </div>
    </div>
  );
}

export default Home;
