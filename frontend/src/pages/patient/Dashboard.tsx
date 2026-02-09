import { Card, CardContent, Grid, Typography } from '@mui/material';

export default function PatientDashboard() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Patient Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Medical Records</Typography>
              <Typography variant="h4">3</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Pending Requests</Typography>
              <Typography variant="h4">1</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Access Events</Typography>
              <Typography variant="h4">5</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
