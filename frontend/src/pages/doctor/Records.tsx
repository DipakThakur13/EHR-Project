import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

const MOCK_APPROVED = [
  {
    id: 1,
    patient: 'Patient A',
    record: 'Lab Report',
    status: 'Approved',
  },
];

export default function DoctorRecords() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Approved Records
      </Typography>

      {MOCK_APPROVED.map((r) => (
        <Card key={r.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography>
              {r.record} — {r.patient}
            </Typography>

            <Stack direction="row" spacing={2} mt={1}>
              <Button variant="contained">View</Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
