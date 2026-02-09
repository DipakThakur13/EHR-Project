import { Button, Container, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { UserRole } from '../../types';

export default function Login() {
  const [role, setRole] = useState<UserRole>('PATIENT');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({
      id: 'mock-user',
      name: 'Demo User',
      role,
      token: 'mock-jwt-token',
    });

    navigate(role === 'PATIENT' ? '/patient' : '/doctor');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <TextField
        select
        fullWidth
        label="Login as"
        value={role}
        onChange={(e) => setRole(e.target.value as UserRole)}
        margin="normal"
      >
        <MenuItem value="PATIENT">Patient</MenuItem>
        <MenuItem value="DOCTOR">Doctor</MenuItem>
      </TextField>

      <Button fullWidth variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
}
