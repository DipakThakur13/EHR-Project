import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

const MOCK_CONSENTS = [
  { id: 1, doctor: 'Dr. Sharma', record: 'Lab Report', status: 'Pending' },
];

export default function PatientConsents() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Consent Requests
      </Typography>

      {MOCK_CONSENTS.map((c) => (
        <Card key={c.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography>
              {c.doctor} requested access to {c.record}
            </Typography>

            <Stack direction="row" spacing={2} mt={1}>
              <Button variant="contained">Approve</Button>
              <Button variant="outlined" color="error">
                Reject
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
