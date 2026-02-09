import { Card, CardContent, Grid, Typography } from '@mui/material';

export default function DoctorDashboard() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Doctor Dashboard
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Pending Requests</Typography>
              <Typography variant="h4">2</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Approved Records</Typography>
              <Typography variant="h4">1</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
