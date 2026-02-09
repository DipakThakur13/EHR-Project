import {
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function RequestAccess() {
  const [patientId, setPatientId] = useState('');
  const [recordId, setRecordId] = useState('');

  const handleRequest = () => {
    alert('Access request submitted (mock)');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Request Record Access
      </Typography>

      <TextField
        fullWidth
        label="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        margin="normal"
      />

      <TextField
        select
        fullWidth
        label="Record"
        value={recordId}
        onChange={(e) => setRecordId(e.target.value)}
        margin="normal"
      >
        <MenuItem value="1">Lab Report</MenuItem>
        <MenuItem value="2">Prescription</MenuItem>
      </TextField>

      <Button
        fullWidth
        variant="contained"
        onClick={handleRequest}
        disabled={!patientId || !recordId}
      >
        Request Access
      </Button>
    </Container>
  );
}
