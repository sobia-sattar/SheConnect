import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { setUser } from '../store/actions'; // Import the action to set the user
import { setUser } from '../store/actions'; // Correct the path if needed
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Here you can add logic for user authentication, such as API calls
    // For demonstration, we'll set a dummy user
    const user = { email };
    dispatch(setUser(user)); // Set user in the global state

    // After login, you can redirect the user to the homepage or dashboard
    // You could use `useNavigate` from 'react-router-dom' to navigate after login
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Login to SheConnect
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        style={{ marginTop: '20px' }}
      >
        Login
      </Button>
    </Container>
  );
};

export default Login;
