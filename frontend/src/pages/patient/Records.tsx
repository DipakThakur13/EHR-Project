import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

const MOCK_RECORDS = [
  { id: 1, type: 'Prescription', createdAt: '2026-01-10' },
  { id: 2, type: 'Lab Report', createdAt: '2026-01-12' },
];

export default function PatientRecords() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h5">My Records</Typography>
        <Button variant="contained">Upload Record</Button>
      </Stack>

      {MOCK_RECORDS.map((record) => (
        <Card key={record.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography>{record.type}</Typography>
            <Typography variant="caption">
              Created on {record.createdAt}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
