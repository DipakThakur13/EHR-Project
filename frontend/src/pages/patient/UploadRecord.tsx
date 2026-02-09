import {
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function UploadRecord() {
  const [file, setFile] = useState<File | null>(null);
  const [type, setType] = useState('');

  const handleSubmit = () => {
    alert('Record uploaded (mock)');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Upload Medical Record
      </Typography>

      <TextField
        select
        fullWidth
        label="Record Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        margin="normal"
      >
        <MenuItem value="Prescription">Prescription</MenuItem>
        <MenuItem value="Lab Report">Lab Report</MenuItem>
        <MenuItem value="Discharge Summary">Discharge Summary</MenuItem>
      </TextField>

      <TextField
        type="file"
        fullWidth
        margin="normal"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <Button
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        disabled={!file || !type}
      >
        Upload
      </Button>
    </Container>
  );
}
