import { Card, CardContent, Typography } from '@mui/material';

const MOCK_AUDIT = [
  {
    id: 1,
    actor: 'Dr. Sharma',
    action: 'Viewed Lab Report',
    date: '2026-01-15',
  },
];

export default function PatientAudit() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Audit Logs
      </Typography>

      {MOCK_AUDIT.map((log) => (
        <Card key={log.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography>{log.actor}</Typography>
            <Typography variant="caption">
              {log.action} on {log.date}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
