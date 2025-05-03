import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Resources from './pages/ResourceLibrary';
import Emergency from './pages/Emergency';
import MentorConnect from './pages/MentorConnect';
import ReportIt from './pages/ReportIt';
import Events from './pages/EventsOpportunities';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login'; // Import the Login page
import { Provider } from 'react-redux';
import store from './store'; // Import Redux store

import AOS from 'aos';
import 'aos/dist/aos.css';
import { createTheme } from '@mui/material/styles';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f9a6c4', // Pink color for the app
      },
      secondary: {
        main: '#d36b99', // Secondary pink shade
      },
    },
    typography: {
      h1: {
        fontSize: '2.5rem',
        fontWeight: '600',
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: '500',
      },
    },
  });

  return (
    <Provider store={store}> {/* Wrap app with Redux Provider */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Container maxWidth="lg" style={{ marginTop: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/mentor-connect" element={<MentorConnect />} />
              <Route path="/report" element={<ReportIt />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} /> {/* Add Login Route */}
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
