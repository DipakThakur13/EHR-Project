import { Alert, Container, Typography } from '@mui/material';

export default function ViewRecord() {
  return (
    <Container maxWidth="md">
      <Typography variant="h5" gutterBottom>
        Medical Record
      </Typography>

      <Alert severity="info" sx={{ mb: 2 }}>
        Access granted via patient consent. This access will be logged on-chain.
      </Alert>

      <Typography>
        [Decrypted medical record content displayed here]
      </Typography>
    </Container>
  );
}
